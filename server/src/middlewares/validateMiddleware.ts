import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError"; // Import your custom error class

// Validation for registration
export const validateRegistration = [
  // Name should be longer than 2 characters
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),

  // Email validation
  body("email").isEmail().withMessage("Invalid email format"),

  // Password validation
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must include at least one number"), // Password must contain a number
];

// Validation for login
export const validateLogin = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

// Validation result handler (common for both login and registration)
export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Gather all the error messages and join them as a single string
    const errorMessages = errors
      .array()
      .map((err) => err.msg)
      .join(". ");

    // Pass specific error messages in the AppError
    return next(new AppError(errorMessages, 400)); // Pass the concatenated error messages
  }
  next(); // Proceed to next middleware or controller
};
