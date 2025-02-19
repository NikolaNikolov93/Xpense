import express from "express";
import { login, logout, register } from "../controllers/authController";
import { sanitizeInput } from "../middlewares/sanitizeMiddleware";
import {
  handleValidationErrors,
  validateLogin,
  validateRegistration,
} from "../middlewares/validateMiddleware";

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
router.post("/logout", logout);

export default router;
