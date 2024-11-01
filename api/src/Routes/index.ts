import { Router } from "express";
import gameRouter from "./Game.Routes";

const router = Router();

router.use("/game", gameRouter);

export default router;
