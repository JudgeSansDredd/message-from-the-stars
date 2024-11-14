import { PrismaClient, User } from "@prisma/client";
import PrismaClientSingleton from "../utils/PrismaClientSingleton";
import { RoleSchema } from "../utils/validation";

export default class Usercontroller {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaClientSingleton.getInstance();
  }

  public async getUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  public async updateUserOrCreate(
    role: RoleSchema,
    id?: string,
    name?: string
  ): Promise<User> {
    console.log("Updating user or creating new user");

    if (!id) {
      return this.prisma.user.create({
        data: {
          role,
          name,
        },
      });
    }

    // Check if user id returns a user
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    // If user doesn't exist, create a new user
    if (!user) {
      return this.prisma.user.create({
        data: {
          id,
          role,
          name,
        },
      });
    }

    // Update user role and name if it's different
    if (user.role !== role || (name && user.name !== name)) {
      return this.prisma.user.update({
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
