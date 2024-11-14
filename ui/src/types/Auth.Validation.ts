import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  role: z.enum(["ALIEN", "SCIENTIST"]),
  gameId: z.string().uuid().nullable(),
});
export type UserSchema = z.infer<typeof UserSchema>;
