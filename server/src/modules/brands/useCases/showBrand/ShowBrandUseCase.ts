import { Brand } from "@prisma/client";

import { AppError } from "../../../../errors/AppError";
import { IBrandsRepository } from "../../repositories/IBrandsRepository";

interface IRequest {
    id: string;
}

class ShowBrandUseCase {
    constructor(private brandsRepository: IBrandsRepository) {}

    async execute({ id }: IRequest): Promise<Brand> {
        const brand = await this.brandsRepository.findById(id);

        if (!brand) {
            throw new AppError("Brand does not exist", 404);
        }

        return brand;
    }
}

export { ShowBrandUseCase };
