import { Brand, Product } from "@prisma/client";

interface ICreateProductDTO {
    name: string;
    price: number;
    brandId: string;
    image: string;
}

interface IProduct extends Product {
    brand: Brand;
}

interface IProductsRepository {
    list(): Promise<IProduct[]>;
    findById(id: string): Promise<Product>;
    findByName(name: string): Promise<Product>;
    create(data: ICreateProductDTO): Promise<Product>;
}

export { IProductsRepository, ICreateProductDTO, IProduct };
