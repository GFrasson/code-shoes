import { AppError } from "../../../../errors/AppError";
import { BrandsRepository } from "../../repositories/implementations/BrandsRepository";

interface IRequest {
    id: string;
}

class DeleteBrandUseCase {
    constructor(private brandsRepository: BrandsRepository) {}

    async execute({ id }: IRequest): Promise<void> {
        const brandExists = await this.brandsRepository.findById(id);

        if (!brandExists) {
            throw new AppError("Brand does not exist", 404);
        }

        await this.brandsRepository.delete(id);
    }
}

export { DeleteBrandUseCase };
