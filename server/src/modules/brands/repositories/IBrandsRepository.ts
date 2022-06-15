import { Brand } from "@prisma/client";

interface ICreateBrandDTO {
    name: string;
    image?: string;
}

interface IBrandsRepository {
    list(): Promise<Brand[]>;
    findById(id: string): Promise<Brand>;
    findByName(name: string): Promise<Brand>;
    create(data: ICreateBrandDTO): Promise<Brand>;
}

export { IBrandsRepository, ICreateBrandDTO };
