import { Game } from "@prisma/client";
import { getAlienCode } from "../utils/functions";
import PrismaClientSingleton from "../utils/PrismaClientSingleton";

export default class GameController {
  public static async getGameByUserId(userId: string): Promise<Game | null> {
    const prisma = PrismaClientSingleton.getInstance();
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { game: true },
    });
    if (!user) return null;
    return user.game;
  }

  private static async getRoomCode(): Promise<string> {
    const prisma = PrismaClientSingleton.getInstance();
    const roomCodes = (await prisma.game.findMany()).map(
      (game) => game.roomCode
    );

    let roomCode: string;
    do {
      roomCode = Array.from({ length: 4 }, () =>
        String.fromCharCode(65 + Math.floor(Math.random() * 26))
      ).join("");
    } while (roomCodes.includes(roomCode));
    return roomCode;
  }

  public static async createGame(userId: string): Promise<Game> {
    const alienCode = getAlienCode();
    const roomCode = await GameController.getRoomCode();
    const prisma = PrismaClientSingleton.getInstance();

    const game = await prisma.game.create({
      data: {
        roomCode,
        alienCode,
      },
    });

    await prisma.user.update({
      where: { id: userId },
      data: {
        game: {
          connect: { id: game.id },
        },
      },
    });

    return game;
  }

  public static async getGameByRoomCode(
    roomCode: string
  ): Promise<Game | null> {
    const prisma = PrismaClientSingleton.getInstance();
    return prisma.game.findFirst({
      where: { roomCode },
    });
  }

  public static async logIntoGameAsScientist(
    roomCode: string,
    userId: string
  ): Promise<Game | null> {
    const prisma = PrismaClientSingleton.getInstance();
    // Find the game by room code
    const game = await prisma.game.findFirst({
      where: { roomCode },
    });
    if (!game || !game.acceptingScientists) return null;

    // Find the user
    const user = await prisma.user.findFirst({
      where: { id: userId },
    });
    if (!user || user.role !== "SCIENTIST") return null;

    // Log the user into the game
    await prisma.user.update({
      where: { id: userId },
      data: {
        game: {
          connect: { id: game.id },
        },
      },
    });

    return game;
  }
}
