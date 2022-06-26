import { BrandsRepository } from "../../repositories/implementations/BrandsRepository";
import { DeleteBrandController } from "./DeleteBrandController";
import { DeleteBrandUseCase } from "./DeleteBrandUseCase";

export default (): DeleteBrandController => {
    const brandsRepository = BrandsRepository.getInstance();
    const deleteBrandUseCase = new DeleteBrandUseCase(brandsRepository);
    const deleteBrandController = new DeleteBrandController(deleteBrandUseCase);

    return deleteBrandController;
};
