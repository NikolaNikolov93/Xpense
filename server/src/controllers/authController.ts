import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/authService";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const result = await registerUser(name, email, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message || "Server error" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);

    // Set JWT as an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(400).json({ message: error.message || "Server error" });
  }
};

export const logout = (req: Request, res: Response): void => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
};
