import { Request, Response } from "express";

import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {
    constructor(private updateProductUseCase: UpdateProductUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name, price, brandId } = request.body;
        const imageFile = request.file && request.file.filename;

        const product = await this.updateProductUseCase.execute({
            id,
            name,
            price,
            brandId,
            image: imageFile,
        });

        return response.status(201).json(product);
    }
}

export { UpdateProductController };
