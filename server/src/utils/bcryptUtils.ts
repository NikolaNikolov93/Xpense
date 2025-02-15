import bcrypt from "bcryptjs";

/**
 * Hash password before saving to DB
 * @param password Plain text password
 * @returns Hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

/**
 * Compare input password with hashed password
 * @param password Plain text password
 * @param hashedPassword Hashed password from DB
 * @returns Boolean (true if match, false otherwise)
 */
export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
