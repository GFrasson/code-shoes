import { Brand } from "@prisma/client";

import { IBrandsRepository } from "../../repositories/IBrandsRepository";
import BrandsView from "../../views/BrandsView";

interface IRequest {
    includeProducts: boolean;
}

class ListBrandsUseCase {
    constructor(private brandsRepository: IBrandsRepository) {}

    async execute({ includeProducts }: IRequest): Promise<Brand[]> {
        let brands = await this.brandsRepository.list({ includeProducts });

        brands = BrandsView.renderMany(brands);

        return brands;
    }
}

export { ListBrandsUseCase };
