import { Request, Response } from "express";

import { UpdateBrandUseCase } from "./UpdateBrandUseCase";

class UpdateBrandController {
    constructor(private updateBrandUseCase: UpdateBrandUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name } = request.body;
        const imageFile = request.file ? request.file.filename : null;

        const brand = await this.updateBrandUseCase.execute({
            id,
            name,
            image: imageFile,
        });

        return response.status(201).json(brand);
    }
}

export { UpdateBrandController };
