import { AppError } from "../../../../errors/AppError";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";

interface IRequest {
    id: string;
}

class DeleteProductUseCase {
    constructor(private productsRepository: ProductsRepository) {}

    async execute({ id }: IRequest): Promise<void> {
        const productExists = await this.productsRepository.findById(id);

        if (!productExists) {
            throw new AppError("Product does not exist", 404);
        }

        await this.productsRepository.delete(id);
    }
}

export { DeleteProductUseCase };
