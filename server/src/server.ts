import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";

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

app.use(router);

// Routes ----------------------------------------------------------------------
app.get("/", (req, res) => {
    console.log("GET /");
    res.status(200).send("Hello World");
});

app.get("/test", (req, res) => {
    console.log("GET /test");
    res.status(200).send("Rota teste");
});

// Start server ----------------------------------------------------------------
app.listen(8080, () => {
    console.log("Server started on http://localhost:8080...");
});
