import { Brand, Product } from "@prisma/client";

interface ICreateProductDTO {
    name: string;
    price: number;
    brandId: string;
    image: string;
}

interface IProductWithBrand extends Product {
    brand: Brand;
}

interface IProductsListOptions {
    take?: number;
}

interface IProductsRepository {
    list(options?: IProductsListOptions): Promise<IProductWithBrand[]>;
    findById(id: string): Promise<Product>;
    findByName(name: string): Promise<Product>;
    create(data: ICreateProductDTO): Promise<Product>;
}

export { IProductsRepository, ICreateProductDTO, IProductWithBrand, IProductsListOptions };
