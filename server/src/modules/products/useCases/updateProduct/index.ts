import { BrandsRepository } from "../../../brands/repositories/implementations/BrandsRepository";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export default (): UpdateProductController => {
    const productsRepository = ProductsRepository.getInstance();
    const brandsRepository = BrandsRepository.getInstance();
    const updateProductUseCase = new UpdateProductUseCase(productsRepository, brandsRepository);
    const updateProductController = new UpdateProductController(updateProductUseCase);

    return updateProductController;
};
