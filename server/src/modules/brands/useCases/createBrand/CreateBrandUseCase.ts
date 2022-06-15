import { Brand } from "@prisma/client";

import { AppError } from "../../../../errors/AppError";
import { IBrandsRepository } from "../../repositories/IBrandsRepository";

interface IRequest {
    name: string;
    // image?: string;
}

class CreateBrandUseCase {
    constructor(private brandsRepository: IBrandsRepository) {}

    async execute({ name }: IRequest): Promise<Brand> {
        const brandAlreadyExists = await this.brandsRepository.findByName(name);

        if (brandAlreadyExists) {
            throw new AppError("Brand already exists");
        }

        const brand = await this.brandsRepository.create({
            name,
        });

        return brand;
    }
}

export { CreateBrandUseCase };
