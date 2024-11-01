import { z } from "zod";

export const LetterColorSchema = z.enum(["green", "black", "red"]);
export type LetterColorSchema = z.infer<typeof LetterColorSchema>;

export const AlienCodeSchema = z.object({
  trust: z.array(z.string()).min(3).max(3),
  amplify: z.array(z.string()).min(2).max(2),
  suspicion: z.array(z.string()).min(1).max(1),
});
export type AlienCodeSchema = z.infer<typeof AlienCodeSchema>;
