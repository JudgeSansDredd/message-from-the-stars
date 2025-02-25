import { Request, Response, Router } from "express";
import Usercontroller from "../../controllers/user.controller";

// Mounted on /api/user
const router = Router();
const userController = new Usercontroller();

router.get("/", async (req: Request, res: Response) => {
  const userId = req.session.userId;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const user = await userController.getUserById(userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  res.json(user);
});

export default router;
