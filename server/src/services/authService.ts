import User from "../models/User";
import AppError from "../utils/AppError";
import { comparePassword, hashPassword } from "../utils/bcryptUtils";
import { generateToken } from "../utils/jwtUtils";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  if (!name || !email || !password) {
    throw new AppError("All fields are required", 400);
  }

  const userExists = await User.findOne({ $or: [{ name }, { email }] });
  if (userExists) {
    throw new AppError("Username or Email already exists", 400);
  }

  const hashedPassword = await hashPassword(password);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  return { message: "User registered successfully" };
};

/**
 * Authenticate user and return JWT in HTTP-only cookie
 * @param email User email
 * @param password User password
 * @returns User object without password
 */
export const loginUser = async (email: string, password: string) => {
  if (!email || !password) {
    throw new AppError("Email and password are required", 400);
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  // Generate JWT token
  const token = generateToken(user._id.toString());

  // Remove password before returning user data
  const { password: _, ...userData } = user.toObject();

  return { user: userData, token };
};
