import { Request, Response, NextFunction } from "express";
import sanitizeHtml from "sanitize-html";

export const sanitizeInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Function to recursively sanitize inputs
    const sanitize = (value: any): any => {
      if (typeof value === "string") {
        return sanitizeHtml(value.trim()); // Trim and remove harmful HTML tags
      } else if (typeof value === "object" && value !== null) {
        Object.keys(value).forEach((key) => {
          value[key] = sanitize(value[key]); // Recursively sanitize nested objects
        });
      }
      return value;
    };

    // Sanitize all request body parameters
    req.body = sanitize(req.body);
    req.query = sanitize(req.query);
    req.params = sanitize(req.params);

    next(); // Proceed to the next middleware/controller
  } catch (error) {
    next(error); // Pass error to centralized error handler
  }
};
