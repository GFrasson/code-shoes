import { Request, Response } from "express";

import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
    constructor(private listProductsUseCase: ListProductsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const products = await this.listProductsUseCase.execute();
        return response.json(products);
    }
}

export { ListProductsController };
