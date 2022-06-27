import { Brand, Product } from "@prisma/client";

interface ICreateProductDTO {
    name: string;
    price: number;
    brandId: string;
    image: string;
}

interface IUpdateProductDTO {
    id: string;
    name: string;
    price: number;
    image: string;
    brandId: string;
}

interface IProductWithBrand extends Product {
    brand: Brand;
}

interface IProductsListOptions {
    take?: number;
    search?: string;
    brand?: string;
}

interface IProductsRepository {
    list(options?: IProductsListOptions): Promise<IProductWithBrand[]>;
    findById(id: string): Promise<Product>;
    findByName(name: string): Promise<Product>;
    create(data: ICreateProductDTO): Promise<Product>;
    update(data: IUpdateProductDTO): Promise<Product>;
    delete(id: string): Promise<void>;
}

export {
    IProductsRepository,
    ICreateProductDTO,
    IUpdateProductDTO,
    IProductWithBrand,
    IProductsListOptions,
};
