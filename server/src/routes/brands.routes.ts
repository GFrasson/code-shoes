import { Router } from "express";
import multer from "multer";
import { resolve } from "path";

import uploadConfig from "../config/upload";
import createBrandController from "../modules/brands/useCases/createBrand";
import listBrandsController from "../modules/brands/useCases/listBrands";
import showBrandController from "../modules/brands/useCases/showBrand";

const brandsRoutes = Router();

const uploadImage = multer(uploadConfig.upload(resolve("uploads", "img", "brands")));

brandsRoutes.get("/", async (req, res) => {
    await listBrandsController().handle(req, res);
});

brandsRoutes.get("/:id", async (req, res) => {
    await showBrandController().handle(req, res);
});

brandsRoutes.post("/", uploadImage.single("image"), async (req, res) => {
    await createBrandController().handle(req, res);
});

export { brandsRoutes };
