import express from "express";
import {
  login,
  logout,
  register,
  updateUser,
} from "../controllers/authController";
import { sanitizeInput } from "../middlewares/sanitizeMiddleware";
import {
  handleValidationErrors,
  validateLogin,
  validateRegistration,
} from "../middlewares/validateMiddleware";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post(
  "/register",
  sanitizeInput,
  validateRegistration,
  handleValidationErrors,
  register
);
router.post(
  "/login",
  sanitizeInput,
  validateLogin,
  handleValidationErrors,
  login
);
router.put(
  "/updateUser",
  authMiddleware, // Add the authMiddleware here to ensure the user is authenticated
  sanitizeInput,
  handleValidationErrors,
  updateUser
);

router.post("/logout", logout);

export default router;
