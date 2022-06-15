import { Product } from "@prisma/client";

interface ICreateProductDTO {
    name: string;
    price: number;
    brandId: string;
    image: string;
}

interface IProductsRepository {
    list(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    findByName(name: string): Promise<Product>;
    create(data: ICreateProductDTO): Promise<Product>;
}

export { IProductsRepository, ICreateProductDTO };
