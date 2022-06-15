import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { ListProductsController } from "./ListProductsController";
import { ListProductsUseCase } from "./ListProductsUseCase";

export default (): ListProductsController => {
    const productsRepository = ProductsRepository.getInstance();
    const listProductsUseCase = new ListProductsUseCase(productsRepository);
    const listProductsController = new ListProductsController(listProductsUseCase);

    return listProductsController;
};
