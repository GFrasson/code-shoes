import { BrandsRepository } from "../../repositories/implementations/BrandsRepository";
import { ListBrandsController } from "./ListBrandsController";
import { ListBrandsUseCase } from "./ListBrandsUseCase";

export default (): ListBrandsController => {
    const brandsRepository = BrandsRepository.getInstance();
    const listBrandsUseCase = new ListBrandsUseCase(brandsRepository);
    const listBrandsController = new ListBrandsController(listBrandsUseCase);

    return listBrandsController;
};
