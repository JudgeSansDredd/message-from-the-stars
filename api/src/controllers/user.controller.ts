import { User } from "@prisma/client";
import PrismaClientSingleton from "../utils/PrismaClientSingleton";
import { RoleSchema } from "../utils/validation";

export default class Usercontroller {
  public static async getUserById(id: string): Promise<User | null> {
    const prisma = PrismaClientSingleton.getInstance();
    return prisma.user.findUnique({
      where: { id },
    });
  }

  public static async updateUserOrCreate(
    role: RoleSchema,
    id?: string,
    name?: string
  ): Promise<User> {
    const prisma = PrismaClientSingleton.getInstance();

    if (!id) {
      return prisma.user.create({
        data: {
          role,
          name,
        },
      });
    }

    // Check if user id returns a user
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    // If user doesn't exist, create a new user
    if (!user) {
      return prisma.user.create({
        data: {
          id,
          role,
          name,
        },
      });
    }

    // Update user role and name if it's different
    if (user.role !== role || (name && user.name !== name)) {
      return prisma.user.update({
        where: {
          id,
        },
        data: {
          role,
          name,
        },
      });
    }

    // Return user if no changes
    return user;
  }
}
