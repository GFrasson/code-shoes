import { Product } from "@prisma/client";

import { IProductsRepository } from "../../repositories/IProductsRepository";

class ListProductsUseCase {
    constructor(private productsRepository: IProductsRepository) {}

    async execute(): Promise<Product[]> {
        const products = await this.productsRepository.list();
        return products;
    }
}

export { ListProductsUseCase };
