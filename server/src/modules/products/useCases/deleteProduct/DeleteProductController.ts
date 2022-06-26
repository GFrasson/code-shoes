import { Request, Response } from "express";

import { DeleteProductUseCase } from "./DeleteProductUseCase";

class DeleteProductController {
    constructor(private deleteProductUseCase: DeleteProductUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        await this.deleteProductUseCase.execute({ id });

        return response.status(204).send();
    }
}

export { DeleteProductController };
