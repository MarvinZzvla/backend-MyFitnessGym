import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1", routes);

// Settings
app.set("port", process.env.PORT || 3000);

export default app;
