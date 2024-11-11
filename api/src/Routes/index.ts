import { Router } from "express";
import gameRouter from "./Game.Routes";

const router = Router();

// Mounted on /api
router.use("/game", gameRouter);

export default router;
