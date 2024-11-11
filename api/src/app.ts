import cors from "cors";
import "dotenv/config";
import express, { Router } from "express";
import apiRouter from "./routes";

const BASE_PATH = process.env.API_BASEPATH || "";
console.log("🚀 ~ BASE_PATH:", BASE_PATH);

const app = express();

// Allow cors from localhost:8000
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS_COMMA_SEPARATED?.split(",") || [],
  })
);

// JSON parsing middleware for post/put requests
app.use(express.json());

// Create application router
const appRouter = Router();

// Nest api router under basepath
// * This allows us to have the /api prefix on all routes and create new prefixes easily
appRouter.use(BASE_PATH, apiRouter);

// Utilize router
app.use(appRouter);

export default app;
