import User from "../models/User";
import { comparePassword, hashPassword } from "../utils/bcryptUtils";
import { generateToken } from "../utils/jwtUtils";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  const userExists = await User.findOne({ $or: [{ name }, { email }] });
  if (userExists) {
    throw new Error("Username or Email already exists");
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
    throw new Error("Email and password are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT token
  const token = generateToken(user._id.toString());

  // Remove password before returning user data
  const { password: _, ...userData } = user.toObject();

  return { user: userData, token };
};
