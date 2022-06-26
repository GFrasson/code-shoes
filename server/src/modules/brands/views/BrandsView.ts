import ProductsView, { IProductView } from "../../products/views/ProductsView";

export interface IBrandView {
    id: string;
    name: string;
    image?: string;
    products?: IProductView[];
}

export default {
    render(brand: IBrandView) {
        return {
            id: brand.id,
            name: brand.name,
            image: brand.image
                ? `http://localhost:8080/uploads/img/brands/${brand.image}`
                : undefined,
            products: brand.products ? ProductsView.renderMany(brand.products) : undefined,
        };
    },

    renderMany(brands: IBrandView[]) {
        return brands.map((brand) => this.render(brand));
    },
};
