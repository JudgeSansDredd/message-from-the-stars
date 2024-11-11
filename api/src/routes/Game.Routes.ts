import { Request, Response, Router } from "express";
import { getAlienCode } from "../GamePieces/functions";

// Mounted on /api/game
const router = Router();

router.get("/", (req: Request, res: Response) => {
  const alienCode = getAlienCode();
  res.json(alienCode);
});

export default router;
