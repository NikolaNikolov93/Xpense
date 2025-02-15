import { Request, Response } from "express";
import User from "../models/User";
import { hashPassword } from "../utils/bcryptUtils";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const userExists = await User.findOne({ $or: [{ name }, { email }] });
    if (userExists) {
      res.status(400).json({ message: "Username or Email already exists" });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
