import { Role } from "@prisma/client";
import { z } from "zod";

export const RoleSchema = z.nativeEnum(Role);
export type RoleSchema = z.infer<typeof RoleSchema>;

export const CreateGameSchema = z.object({
  name: z.string().optional(),
});
export type CreateGameSchema = z.infer<typeof CreateGameSchema>;
