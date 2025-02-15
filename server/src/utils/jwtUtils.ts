import jwt from "jsonwebtoken";

/**
 * Generate JWT token
 * @param id User ID
 * @returns JWT token
 */
export const generateToken = (id: number): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
};

/**
 * Verify JWT token
 * @param token JWT token from cookies
 * @returns Decoded token or null if invalid
 */
export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (error) {
    return null;
  }
};
