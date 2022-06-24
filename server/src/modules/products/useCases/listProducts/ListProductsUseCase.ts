import { Product } from "@prisma/client";

import { IProductsRepository } from "../../repositories/IProductsRepository";
import ProductsView from "../../views/ProductsView";

class ListProductsUseCase {
    constructor(private productsRepository: IProductsRepository) {}

    async execute(): Promise<Product[]> {
        let products = await this.productsRepository.list();

        products = ProductsView.renderMany(products);

        return products;
    }
}

export { ListProductsUseCase };
