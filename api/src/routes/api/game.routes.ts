import { Request, Response, Router } from "express";
import GameController from "../../controllers/game.controller";
import Usercontroller from "../../controllers/user.controller";
import { CreateGameSchema } from "../../utils/validation";

// Mounted on /api/game
const router = Router();
const userController = new Usercontroller();
const gameController = new GameController();

// Create a new game (and maybe a new alien)
router.post("/", async (req: Request, res: Response) => {
  console.log("Creating game");
  let params: CreateGameSchema;
  try {
    params = CreateGameSchema.parse(req.body);
  } catch (error) {
    res.status(400).json(error);
    return;
  }

  try {
    const user = await userController.updateUserOrCreate(
      "ALIEN",
      req.session.userId,
      params.name
    );

    const game = await gameController.createGame(user.id);

    req.session.userId = user.id;
    req.session.gameId = game.id;

    res.json(game);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Log in to a game as a scientist
router.post("/:roomCode", async (req: Request, res: Response) => {
  try {
    const { roomCode } = req.params;
    const params = CreateGameSchema.parse(req.body);
    const user = await userController.updateUserOrCreate(
      "SCIENTIST",
      req.session.userId,
      params.name
    );
    const game = await gameController.logIntoGameAsScientist(roomCode, user.id);
    if (!game) {
      res
        .status(400)
        .json({ message: "Game not found or not accepting scientists" });
      return;
    }
    req.session.userId = user.id;
    req.session.gameId = game.id;
    res.json(game);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req: Request, res: Response) => {
  const userId = req.session.userId;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const game = await gameController.getGameByUserId(userId);
  if (!game) {
    res.status(404).json({ message: "Game not found" });
    return;
  }
  res.json(game);
});

export default router;
