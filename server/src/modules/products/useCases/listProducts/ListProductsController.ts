import { Request, Response } from "express";

import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
    constructor(private ListProductsUseCase: ListProductsUseCase) {}

    handle(request: Request, response: Response): Response {
        return response.status(200).json();
    }
}

export { ListProductsController };
