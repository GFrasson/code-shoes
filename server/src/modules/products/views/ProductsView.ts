import BrandsView, { IBrandView } from "../../brands/views/BrandsView";

export interface IProductView {
    id: string;
    name: string;
    price: number;
    image: string;
    brand?: IBrandView;
}

export default {
    render(product: IProductView) {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            image: `http://localhost:8080/uploads/img/products/${product.image}`,
            brand: product.brand ? BrandsView.render(product.brand) : undefined,
        };
    },

    renderMany(products: IProductView[]) {
        return products.map((product) => this.render(product));
    },
};
