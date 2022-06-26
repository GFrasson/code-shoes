import { Request, Response } from "express";

import { ListBrandsUseCase } from "./ListBrandsUseCase";

class ListBrandsController {
    constructor(private listBrandsUseCase: ListBrandsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { products } = request.query;

        let includeProducts = false;
        if (products && products === "true") {
            includeProducts = true;
        }

        const brands = await this.listBrandsUseCase.execute({
            includeProducts,
        });

        return response.json(brands);
    }
}

export { ListBrandsController };
