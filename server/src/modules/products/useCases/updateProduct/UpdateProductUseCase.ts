import { Product } from "@prisma/client";
import { resolve } from "path";

import { AppError } from "../../../../errors/AppError";
import { deleteFile } from "../../../../utils/file";
import { BrandsRepository } from "../../../brands/repositories/implementations/BrandsRepository";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";

interface IRequest {
    id: string;
    name: string;
    price: number;
    image: string;
    brandId: string;
}

class UpdateProductUseCase {
    constructor(
        private productsRepository: ProductsRepository,
        private brandsRepository: BrandsRepository
    ) {}

    async execute({ id, name, price, image, brandId }: IRequest): Promise<Product> {
        if (!id || !image || !price || !name || !brandId) {
            throw new AppError("Required field is missing");
        }

        let product = await this.productsRepository.findById(id);

        if (!product) {
            throw new AppError("Product does not exist", 404);
        }

        const brand = await this.brandsRepository.findById(brandId);

        if (!brand) {
            throw new AppError("Brand does not exist", 404);
        }

        const productAlreadyExists = await this.productsRepository.findByName(name);

        if (product.name !== name && productAlreadyExists) {
            throw new AppError("Product already exists");
        }

        const priceNumber = Number(price);

        if (Number.isNaN(priceNumber)) {
            throw new AppError("Price is not a number");
        }

        if (product.image) {
            await deleteFile(resolve("uploads", "img", "products", product.image));
        }

        product = await this.productsRepository.update({
            id,
            name,
            price: priceNumber,
            image,
            brandId,
        });

        return product;
    }
}

export { UpdateProductUseCase };
