import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  addExpense,
  getExpensesForLastNDays,
  getLatestExpenses,
} from "../controllers/expenseController";

const router = express.Router();

// Create a new expense
router.post("/", authMiddleware, addExpense);
router.get("/latest", authMiddleware, getLatestExpenses);
// router.get("/last30days", authMiddleware, getLatestExpensesForLast30Days);
router.get("/lastNDays", authMiddleware, getExpensesForLastNDays);

export default router;
