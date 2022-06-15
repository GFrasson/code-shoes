import { Brand } from "@prisma/client";

import { IBrandsRepository } from "../../repositories/IBrandsRepository";

class ListBrandsUseCase {
    constructor(private brandsRepository: IBrandsRepository) {}

    async execute(): Promise<Brand[]> {
        const brands = await this.brandsRepository.list();
        return brands;
    }
}

export { ListBrandsUseCase };
