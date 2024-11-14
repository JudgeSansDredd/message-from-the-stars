import { Router } from "express";
import gameRouter from "./game.routes";

const router = Router();

// Mounted on /api
router.use("/game", gameRouter);

export default router;
