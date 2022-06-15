import { BrandsRepository } from "../../repositories/implementations/BrandsRepository";
import { CreateBrandController } from "./CreateBrandController";
import { CreateBrandUseCase } from "./CreateBrandUseCase";

export default (): CreateBrandController => {
    const brandsRepository = BrandsRepository.getInstance();
    const createBrandUseCase = new CreateBrandUseCase(brandsRepository);
    const createBrandController = new CreateBrandController(createBrandUseCase);

    return createBrandController;
};
