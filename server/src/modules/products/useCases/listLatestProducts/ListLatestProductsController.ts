import { Request, Response } from "express";

import { ListLatestProductsUseCase } from "./ListLatestProductsUseCase";

class ListLatestProcutsController {
    constructor(private listLatestProductsUseCase: ListLatestProductsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const latestProducts = await this.listLatestProductsUseCase.execute();

        return response.json(latestProducts);
    }
}

export { ListLatestProcutsController };
