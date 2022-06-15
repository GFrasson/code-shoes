import { Request, Response } from "express";

import { ShowProductUseCase } from "./ShowProductUseCase";

class ShowProductController {
    constructor(private showProductUseCase: ShowProductUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const product = await this.showProductUseCase.execute({ id });

        return response.json(product);
    }
}

export { ShowProductController };
