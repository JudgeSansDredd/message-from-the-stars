import { Router } from "express";
import gameRouter from "./game.routes";
import userRouter from "./user.routes";

// Mounted on /api
const router = Router();

router.use("/game", gameRouter);
router.use("/user", userRouter);

export default router;
