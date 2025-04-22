import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  console.log("🔐 Login attempt:");
  console.log("👉 Email:", email);
  console.log("👉 Password (entered):", password);

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      console.log("❌ User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("✅ User found:", user.email);
    console.log("🔍 Hashed password in DB:", user.password);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("🧠 Password match:", isPasswordValid);

    if (!isPasswordValid) {
      console.log("❌ Invalid credentials");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", email: user.email });
  } catch (error) {
    console.error("🔥 Server error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
