import { Router } from "express";
import multer from "multer";
import { resolve } from "path";

import uploadConfig from "../config/upload";
import createProductController from "../modules/products/useCases/createProduct";
import listProductsController from "../modules/products/useCases/listProducts";
import showProductController from "../modules/products/useCases/showProduct";

const productsRoutes = Router();

const uploadImage = multer(uploadConfig.upload(resolve("uploads", "img", "products")));

productsRoutes.get("/", async (req, res) => {
    await listProductsController().handle(req, res);
});

productsRoutes.get("/:id", async (req, res) => {
    await showProductController().handle(req, res);
});

productsRoutes.post("/", uploadImage.single("image"), async (req, res) => {
    await createProductController().handle(req, res);
});

export { productsRoutes };
