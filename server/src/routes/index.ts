import { Router } from "express";

import { brandsRoutes } from "./brands.routes";
import { productsRoutes } from "./products.routes";

const router = Router();

router.use("/brands", brandsRoutes);
router.use("/products", productsRoutes);
// router.use("/users", usersRoutes);

export { router };
