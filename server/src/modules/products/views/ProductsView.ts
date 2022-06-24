import BrandsView from "../../brands/views/BrandsView";
import { IProduct } from "../repositories/IProductsRepository";

export default {
    render(product: IProduct) {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            image: `http://localhost:8080/uploads/img/products/${product.image}`,
            brand: BrandsView.render(product.brand),
        };
    },

    renderMany(products: IProduct[]) {
        return products.map((product) => this.render(product));
    },
};
