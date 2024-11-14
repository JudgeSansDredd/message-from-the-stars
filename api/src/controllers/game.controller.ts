import { PrismaClient } from "@prisma/client";
import PrismaClientSingleton from "../utils/PrismaClientSingleton";
import { getAlienCode } from "../utils/functions";

export default class GameController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaClientSingleton.getInstance();
  }

  public createGame() {
    const roomCode = Array.from({ length: 4 }, () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26))
    ).join("");
    const alienCode = getAlienCode();

    return this.prisma.game.create({
      data: {
        roomCode,
        alienCode,
      },
    });
  }
}
