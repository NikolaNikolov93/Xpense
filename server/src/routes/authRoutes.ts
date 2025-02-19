import express from "express";
import { login, logout, register } from "../controllers/authController";
import { sanitizeInput } from "../middlewares/sanitizeMiddleware";

const router = express.Router();

router.post("/register", sanitizeInput, register);
router.post("/login", sanitizeInput, login);
router.post("/logout", logout);

export default router;
