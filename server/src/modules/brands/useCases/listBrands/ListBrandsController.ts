import { Request, Response } from "express";

import { ListBrandsUseCase } from "./ListBrandsUseCase";

class ListBrandsController {
    constructor(private listBrandsUseCase: ListBrandsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const brands = await this.listBrandsUseCase.execute();
        return response.json(brands);
    }
}

export { ListBrandsController };
