import { Request, Response } from "express";

import { ShowBrandUseCase } from "./ShowBrandUseCase";

class ShowBrandController {
    constructor(private showBrandUseCase: ShowBrandUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const brand = await this.showBrandUseCase.execute({ id });

        return response.json(brand);
    }
}

export { ShowBrandController };
