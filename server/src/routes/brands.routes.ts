import { Router } from "express";

import createBrandController from "../modules/brands/useCases/createBrand";
import listBrandsController from "../modules/brands/useCases/listBrands";
import showBrandController from "../modules/brands/useCases/showBrand";

const brandsRoutes = Router();

brandsRoutes.get("/", async (req, res) => {
    await listBrandsController().handle(req, res);
});

brandsRoutes.get("/:id", async (req, res) => {
    await showBrandController().handle(req, res);
});

brandsRoutes.post("/", async (req, res) => {
    await createBrandController().handle(req, res);
});

export { brandsRoutes };
