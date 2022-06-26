import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import ProductsView, { IProductView } from "../../views/ProductsView";

class ListLatestProductsUseCase {
    constructor(private productsRepository: ProductsRepository) {}

    async execute(): Promise<IProductView[]> {
        let latestProducts = await this.productsRepository.list({
            take: 3,
        });

        latestProducts = ProductsView.renderMany(latestProducts);

        return latestProducts;
    }
}

export { ListLatestProductsUseCase };
