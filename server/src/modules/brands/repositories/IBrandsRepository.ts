import { Brand } from "@prisma/client";

interface ICreateBrandDTO {
    name: string;
    image?: string;
}

interface IUpdateBrandDTO {
    id: string;
    name: string;
    image?: string;
}

interface IBrandsListOptions {
    includeProducts?: boolean;
}

interface IBrandsRepository {
    list(options?: IBrandsListOptions): Promise<Brand[]>;
    findById(id: string): Promise<Brand>;
    findByName(name: string): Promise<Brand>;
    create(data: ICreateBrandDTO): Promise<Brand>;
    update(data: IUpdateBrandDTO): Promise<Brand>;
}

export { IBrandsRepository, ICreateBrandDTO, IUpdateBrandDTO, IBrandsListOptions };
