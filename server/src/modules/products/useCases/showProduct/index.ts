import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { ShowProductController } from "./ShowProductController";
import { ShowProductUseCase } from "./ShowProductUseCase";

export default (): ShowProductController => {
    const productsRepository = ProductsRepository.getInstance();
    const showProductUseCase = new ShowProductUseCase(productsRepository);
    const showProductController = new ShowProductController(showProductUseCase);

    return showProductController;
};
