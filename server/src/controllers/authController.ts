import { Request, Response, NextFunction } from "express";
import { loginUser, registerUser } from "../services/authService";
import { AuthRequest } from "../middlewares/authMiddleware";
import User from "../models/User";
import AppError from "../utils/AppError";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const result = await registerUser(name, email, password);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginUser(email, password);

    // Set JWT as an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    next(error);
  }
};

export const logout = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: true, // Only set to true in production
      sameSite: "none", // For cross-site cookies
      expires: new Date(0), // Expire the cookie immediately
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: AuthRequest, res) => {
  try {
    const { name, currency, totalBalance } = req.body; // Extract the user data from the request body

    // Check if the data is provided
    if (!name && !currency && totalBalance === undefined) {
      throw new AppError("No valid data provided to update.", 400);
    }

    // Retrieve the user from the database using the user ID (assuming req.user contains the authenticated user info)
    const user = await User.findById(req.user.id);

    if (!user) {
      throw new AppError("User not found.", 404);
    }

    // Update the user fields with the provided data
    if (name) user.name = name;
    if (currency) user.currency = currency;
    if (totalBalance) user.totalBalance = totalBalance;

    // Save the updated user
    await user.save();

    // Respond with the updated user data
    res.status(200).json({
      name: user.name,
      currency: user.currency,
      totalBalance: user.totalBalance,
    });
  } catch (error) {
    if (error instanceof AppError) {
      // Handle custom AppError
      res.status(error.statusCode).json({ message: error.message });
    } else {
      // Handle general errors
      res
        .status(500)
        .json({ message: "Server error. Please try again later." });
    }
  }
};
