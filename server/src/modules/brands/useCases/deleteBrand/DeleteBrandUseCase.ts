import { resolve } from "path";

import { AppError } from "../../../../errors/AppError";
import { deleteFile } from "../../../../utils/file";
import { BrandsRepository } from "../../repositories/implementations/BrandsRepository";

interface IRequest {
    id: string;
}

class DeleteBrandUseCase {
    constructor(private brandsRepository: BrandsRepository) {}

    async execute({ id }: IRequest): Promise<void> {
        const brand = await this.brandsRepository.findById(id, true);

        if (!brand) {
            throw new AppError("Brand does not exist", 404);
        }

        if (brand.image) {
            await deleteFile(resolve("uploads", "img", "brands", brand.image));
        }

        brand.products.forEach(async (product) => {
            if (product.image) {
                await deleteFile(resolve("uploads", "img", "products", product.image));
            }
        });

        await this.brandsRepository.delete(id);
    }
}

export { DeleteBrandUseCase };
