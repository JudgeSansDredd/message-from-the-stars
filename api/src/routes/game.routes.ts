import { Request, Response, Router } from "express";
import GameController from "../controllers/game.controller";

// Mounted on /api/game
const router = Router();
const gameController = new GameController();

router.post("/", async (req: Request, res: Response) => {
  const { userId } = req.session;

  const game = await gameController.createGame();

  req.session.gameId = game.id;

  res.json(game);
});

export default router;
