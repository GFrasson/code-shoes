import { Router } from "express";

import createProductController from "../modules/products/useCases/createProduct";
import listProductsController from "../modules/products/useCases/listProducts";
import showProductController from "../modules/products/useCases/showProduct";

const productsRoutes = Router();

productsRoutes.get("/", async (req, res) => {
    await listProductsController().handle(req, res);
});

productsRoutes.get("/:id", async (req, res) => {
    await showProductController().handle(req, res);
});

productsRoutes.post("/", async (req, res) => {
    await createProductController().handle(req, res);
});

export { productsRoutes };
