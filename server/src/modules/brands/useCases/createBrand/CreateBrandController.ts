import { Request, Response } from "express";

import { CreateBrandUseCase } from "./CreateBrandUseCase";

class CreateBrandController {
    constructor(private createBrandUseCase: CreateBrandUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        const imageFile = request.file && request.file.filename;

        const brand = await this.createBrandUseCase.execute({
            name,
            image: imageFile,
        });

        return response.status(201).json(brand);
    }
}

export { CreateBrandController };
