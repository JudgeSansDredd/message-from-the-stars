import { z } from "zod";

export const AlienCodeSchema = z.object({
  trust: z.array(z.string()).length(3),
  amplify: z.array(z.string()).length(2),
  suspicion: z.array(z.string()).length(1),
});
export type AlienCodeSchema = z.infer<typeof AlienCodeSchema>;

export const GameSchema = z.object({
  id: z.string().uuid(),
  roomCode: z.string().length(4),
  alienCode: AlienCodeSchema,
});
export type GameSchema = z.infer<typeof GameSchema>;

export const LetterColorSchema = z.enum(["green", "black", "red"]);
export type LetterColorSchema = z.infer<typeof LetterColorSchema>;
