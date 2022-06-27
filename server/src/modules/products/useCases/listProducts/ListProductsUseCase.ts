import { Product } from "@prisma/client";

import { IProductsRepository } from "../../repositories/IProductsRepository";
import ProductsView from "../../views/ProductsView";

interface IRequest {
    search: string;
    brand: string;
}

class ListProductsUseCase {
    constructor(private productsRepository: IProductsRepository) {}

    async execute({ search, brand }: IRequest): Promise<Product[]> {
        let products = await this.productsRepository.list({
            search,
            brand,
        });

        products = ProductsView.renderMany(products);

        return products;
    }
}

export { ListProductsUseCase };
