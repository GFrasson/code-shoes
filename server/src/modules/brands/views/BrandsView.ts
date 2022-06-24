import { Brand } from "@prisma/client";

export default {
    render(brand: Brand) {
        return {
            id: brand.id,
            name: brand.name,
            image: `http://localhost:8080/uploads/img/brands/${brand.image}`,
        };
    },

    renderMany(brands: Brand[]) {
        return brands.map((brand) => this.render(brand));
    },
};
