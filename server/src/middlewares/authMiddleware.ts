import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export interface AuthRequest extends Request {
  user?: any; // User property from your JWT verification
  cookies: { [key: string]: string }; // Explicitly define cookies property
  body: any; // Or use a more specific type for the body, like { title: string; amount: number; category: string }
  headers: any;
  query: any;
  params: any;
}
export const authMiddleware = async (
  req: AuthRequest, // Use AuthRequest type here
  res: Response,
  next: NextFunction
): Promise<void | any> => {
  const authHeader = req.headers["authorization"];

  // req.cookies.token -----> THE ACTUAL COOCKIE IS AVAILABLE BUT NOT USED. ITS BLOCKED FOR BEING A THIRD PARTY COOKIE. MUST BE PLACED INSTEAD OF authHeader!

  const token = authHeader.split(" ")[1]; // Get the token from LOCAL STORAGE

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
    res.status(401).json({ message: "Invalid token." });
  }
};
