import { Request, Response } from "express";

import { UpdateBrandUseCase } from "./UpdateBrandUseCase";

class UpdateBrandController {
    constructor(private updateBrandUseCase: UpdateBrandUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        return response.status(200).json();
    }
}

export { UpdateBrandController };
