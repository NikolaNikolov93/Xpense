import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export interface AuthRequest extends Request {
  user?: any; // Declare `user` as an optional property
}

export const authMiddleware = async (
  req: AuthRequest, // Use AuthRequest type here
  res: Response,
  next: NextFunction
): Promise<void | any> => {
  // Return void or Promise<void>

  const token = req.cookies.token; // Get the token from the cookie

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = await User.findById(decoded.id).select("-password"); // Attach user to request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};
