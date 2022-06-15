import { Router } from "express";

import createBrandController from "../modules/brands/useCases/createBrand";

const brandsRoutes = Router();

brandsRoutes.post("/", async (req, res) => {
    await createBrandController().handle(req, res);
});

export { brandsRoutes };
