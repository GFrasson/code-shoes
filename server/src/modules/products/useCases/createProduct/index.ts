import { BrandsRepository } from "../../../brands/repositories/implementations/BrandsRepository";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

export default (): CreateProductController => {
    const productsRepository = ProductsRepository.getInstance();
    const brandsRepository = BrandsRepository.getInstance();
    const createProductUseCase = new CreateProductUseCase(productsRepository, brandsRepository);
    const createProductController = new CreateProductController(createProductUseCase);

    return createProductController;
};
