import { Router } from "express";

import createProductController from "../modules/products/useCases/createProduct";

const productsRoutes = Router();

productsRoutes.post("/", async (req, res) => {
    await createProductController().handle(req, res);
});

export { productsRoutes };
