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

export const updateUserProfilePicture = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { updatedPicture } = req.body; // New

    if (!updatedPicture) {
      throw new AppError("No profile picture provided.", 400);
    }

    // Validate the base64 image format (for example, check if it starts with 'data:image/')
    if (!updatedPicture.startsWith("data:image/")) {
      throw new AppError(
        "Invalid image format. Please upload a valid image.",
        400
      );
    }

    // Optionally, you can limit the image size by validating the Base64 string size
    if (updatedPicture.length > 5 * 1024 * 1024) {
      // Limit to 5MB
      throw new AppError(
        "Image is too large. Please upload an image smaller than 5MB.",
        400
      );
    }

    // Retrieve the user from the database using the user ID (assuming req.user contains the authenticated user info)
    const user = await User.findById(req.user.id);

    if (!user) {
      throw new AppError("User not found.", 404);
    }

    // Save the Base64 image to the user's profile (you could store it in a file, cloud storage, etc.)
    // Here, we're saving the image as a Base64 string in the user's profile

    user.profilePicture = updatedPicture; // Update the user's profile picture field

    // Save the updated user
    await user.save();

    // Respond with the updated user data, including the new profile picture
    res.status(200).json({
      message: "Profile picture updated successfully.",
      profilePicture: user.profilePicture, // You can return the Base64 or a URL if it's stored somewhere else
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

export const refreshUserData = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password

    if (!user) {
      throw new AppError("User not found.", 404);
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};
