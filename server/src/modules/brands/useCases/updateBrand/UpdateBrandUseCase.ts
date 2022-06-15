import { Brand } from "@prisma/client";
import { resolve } from "path";

import { AppError } from "../../../../errors/AppError";
import { deleteFile } from "../../../../utils/file";
import { IBrandsRepository } from "../../repositories/IBrandsRepository";

interface IRequest {
    id: string;
    name: string;
    image?: string;
}

class UpdateBrandUseCase {
    constructor(private brandsRepository: IBrandsRepository) {}

    async execute({ id, name, image }: IRequest): Promise<Brand> {
        let brand = await this.brandsRepository.findById(id);

        if (!brand) {
            throw new AppError("Brand does not exist", 404);
        }

        if (brand.image) {
            await deleteFile(resolve("uploads", "img", "brands", brand.image));
        }

        brand = await this.brandsRepository.update({
            id,
            name,
            image,
        });

        return brand;
    }
}

export { UpdateBrandUseCase };
