import { Request, Response } from "express";

import { CreateBrandUseCase } from "./CreateBrandUseCase";

class CreateBrandController {
    constructor(private createBrandUseCase: CreateBrandUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const brand = await this.createBrandUseCase.execute({ name });

        return response.status(201).json(brand);
    }
}

export { CreateBrandController };
