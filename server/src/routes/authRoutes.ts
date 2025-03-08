import express from "express";
import {
  login,
  logout,
  refreshUserData,
  register,
  updateUser,
  updateUserProfilePicture,
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
router.put(
  "/updateUserProfilePicture",
  authMiddleware, // Add the authMiddleware here to ensure the user is authenticated
  updateUserProfilePicture
);

router.post("/logout", logout);

router.get("/refreshUserData", authMiddleware, refreshUserData);

export default router;
