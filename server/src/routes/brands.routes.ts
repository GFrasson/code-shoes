import { Router } from "express";

import createBrandController from "../modules/brands/useCases/createBrand";
import listBrandsController from "../modules/brands/useCases/listBrands";

const brandsRoutes = Router();

brandsRoutes.get("/", async (req, res) => {
    await listBrandsController().handle(req, res);
});

brandsRoutes.post("/", async (req, res) => {
    await createBrandController().handle(req, res);
});

export { brandsRoutes };
