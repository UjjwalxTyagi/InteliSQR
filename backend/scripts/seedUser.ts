import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("123456", 10);

  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: { password },
    create: {
      email: "test@example.com",
      password,
    },
  });

  console.log("✅ User created/updated:", user);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
