import { Product } from "@prisma/client";

import { AppError } from "../../../../errors/AppError";
import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
    id: string;
}

class ShowProductUseCase {
    constructor(private productsRepository: IProductsRepository) {}

    async execute({ id }: IRequest): Promise<Product> {
        const product = await this.productsRepository.findById(id);

        if (!product) {
            throw new AppError("Product does not exist", 404);
        }

        return product;
    }
}

export { ShowProductUseCase };
