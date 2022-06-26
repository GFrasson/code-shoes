import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { ListLatestProcutsController } from "./ListLatestProductsController";
import { ListLatestProductsUseCase } from "./ListLatestProductsUseCase";

export default (): ListLatestProcutsController => {
    const productsRepository = ProductsRepository.getInstance();
    const listLatestProductsUseCase = new ListLatestProductsUseCase(productsRepository);
    const listLatestProcutsController = new ListLatestProcutsController(listLatestProductsUseCase);

    return listLatestProcutsController;
};
