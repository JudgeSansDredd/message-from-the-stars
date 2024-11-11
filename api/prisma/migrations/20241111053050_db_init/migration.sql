-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ALIEN', 'SCIENTIST');

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "roomCode" TEXT NOT NULL,
    "alienCode" JSONB NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_roomCode_key" ON "Game"("roomCode");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
