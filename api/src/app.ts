import cors from "cors";
import "dotenv/config";
import express, { Router } from "express";
import session from "express-session";
import apiRouter from "./routes";

const app = express();

// Allow cors from localhost:8000
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS_COMMA_SEPARATED?.split(",") || [],
  })
);

// Session configuration
declare module "express-session" {
  interface SessionData {
    userId: string;
    gameId: string;
  }
}
app.use(
  session({
    secret: process.env.APP_SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.APP_SESSION_USE_HTTPS === "true",
      maxAge: 1000 * 60 * 60 * 6, // 6 hours
    },
  })
);

// JSON parsing middleware for post/put requests
app.use(express.json());

// Create application router
const appRouter = Router();

// Nest api router under basepath
// * This allows us to have the /api prefix on all routes and create new prefixes easily
appRouter.use(apiRouter);

// Utilize router
app.use(appRouter);

export default app;
