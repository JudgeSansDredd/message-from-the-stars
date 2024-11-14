import { Game, PrismaClient } from "@prisma/client";
import { getAlienCode } from "../utils/functions";
import PrismaClientSingleton from "../utils/PrismaClientSingleton";

export default class GameController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaClientSingleton.getInstance();
  }

  public async getGameByUserId(userId: string): Promise<Game | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { game: true },
    });
    if (!user) return null;
    return user.game;
  }

  private async getRoomCode(): Promise<string> {
    const prisma = PrismaClientSingleton.getInstance();
    const roomCodes = (await this.prisma.game.findMany()).map(
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

  public async createGame(userId: string): Promise<Game> {
    const alienCode = getAlienCode();
    const roomCode = await this.getRoomCode();

    const game = await this.prisma.game.create({
      data: {
        roomCode,
        alienCode,
      },
    });

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        game: {
          connect: { id: game.id },
        },
      },
    });

    return game;
  }

  public async getGameByRoomCode(roomCode: string): Promise<Game | null> {
    return this.prisma.game.findFirst({
      where: { roomCode },
    });
  }

  public async logIntoGameAsScientist(
    roomCode: string,
    userId: string
  ): Promise<Game | null> {
    // Find the game by room code
    const game = await this.prisma.game.findFirst({
      where: { roomCode },
    });
    if (!game || !game.acceptingScientists) return null;

    // Find the user
    const user = await this.prisma.user.findFirst({
      where: { id: userId },
    });
    if (!user || user.role !== "SCIENTIST") return null;

    // Log the user into the game
    await this.prisma.user.update({
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
