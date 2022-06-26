import { resolve } from "path";

import { AppError } from "../../../../errors/AppError";
import { deleteFile } from "../../../../utils/file";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";

interface IRequest {
    id: string;
}

class DeleteProductUseCase {
    constructor(private productsRepository: ProductsRepository) {}

    async execute({ id }: IRequest): Promise<void> {
        const product = await this.productsRepository.findById(id);

        if (!product) {
            throw new AppError("Product does not exist", 404);
        }

        if (product.image) {
            await deleteFile(resolve("uploads", "img", "products", product.image));
        }

        await this.productsRepository.delete(id);
    }
}

export { DeleteProductUseCase };
