import cors from "cors";
import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import { errorHandler } from "./errors/errorHandler";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

// Middlewares -----------------------------------------------------------------
app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Routes ----------------------------------------------------------------------
app.use(router);

// Error Handler ---------------------------------------------------------------
app.use(errorHandler);

// Start server ----------------------------------------------------------------
app.listen(8080, () => {
    console.log("Server started on http://localhost:8080...");
});
