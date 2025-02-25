import { Router } from "express";
import apiRouter from "./api";

const router = Router();

// Mounted on /api
router.use("/api", apiRouter);

export default router;
