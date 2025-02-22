import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  addExpense,
  getLatestExpenses,
  getLatestMonth,
} from "../controllers/expenseController";

const router = express.Router();

// Create a new expense
router.post("/", authMiddleware, addExpense);
router.get("/latest", authMiddleware, getLatestExpenses);
router.get("/lastMonth", authMiddleware, getLatestMonth);

export default router;
