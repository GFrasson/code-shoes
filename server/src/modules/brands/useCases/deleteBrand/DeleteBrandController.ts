import { Request, Response } from "express";

import { DeleteBrandUseCase } from "./DeleteBrandUseCase";

class DeleteBrandController {
    constructor(private deleteBrandUseCase: DeleteBrandUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        await this.deleteBrandUseCase.execute({ id });

        return response.status(204).send();
    }
}

export { DeleteBrandController };
