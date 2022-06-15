import { Product } from "@prisma/client";

import { AppError } from "../../../../errors/AppError";
import { IBrandsRepository } from "../../../brands/repositories/IBrandsRepository";
import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
    name: string;
    price: number;
    brandId: string;
    // image?: string;
}

class CreateProductUseCase {
    constructor(
        private productsRepository: IProductsRepository,
        private brandsRepository: IBrandsRepository
    ) {}

    async execute({ name, price, brandId }: IRequest): Promise<Product> {
        const productAlreadyExists = await this.productsRepository.findByName(name);

        if (productAlreadyExists) {
            throw new AppError("Product already exists");
        }

        const brand = await this.brandsRepository.findById(brandId);

        if (!brand) {
            throw new AppError("Brand not found", 404);
        }

        const product = await this.productsRepository.create({
            name,
            price,
            brandId,
        });

        return product;
    }
}

export { CreateProductUseCase };
