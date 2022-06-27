import { Request, Response } from "express";

import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
    constructor(private listProductsUseCase: ListProductsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { search, brand } = request.query;

        const products = await this.listProductsUseCase.execute({
            search: typeof search === "string" ? search : "",
            brand: typeof brand === "string" ? brand : "",
        });

        return response.json(products);
    }
}

export { ListProductsController };
