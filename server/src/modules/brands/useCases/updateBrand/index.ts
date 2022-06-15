import { BrandsRepository } from "../../repositories/implementations/BrandsRepository";
import { UpdateBrandController } from "./UpdateBrandController";
import { UpdateBrandUseCase } from "./UpdateBrandUseCase";

export default (): UpdateBrandController => {
    const brandsRepository = BrandsRepository.getInstance();
    const updateBrandUseCase = new UpdateBrandUseCase(brandsRepository);
    const updateBrandController = new UpdateBrandController(updateBrandUseCase);

    return updateBrandController;
};
