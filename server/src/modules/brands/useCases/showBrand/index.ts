import { BrandsRepository } from "../../repositories/implementations/BrandsRepository";
import { ShowBrandController } from "./ShowBrandController";
import { ShowBrandUseCase } from "./ShowBrandUseCase";

export default (): ShowBrandController => {
    const brandsRepository = BrandsRepository.getInstance();
    const showBrandUseCase = new ShowBrandUseCase(brandsRepository);
    const showBrandController = new ShowBrandController(showBrandUseCase);

    return showBrandController;
};
