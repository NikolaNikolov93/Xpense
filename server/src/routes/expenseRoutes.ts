import express from "express";
import Expense from "../models/Expense";
import { authMiddleware, AuthRequest } from "../middlewares/authMiddleware";

const router = express.Router();

// Create a new expense
router.post("/", authMiddleware, async (req: AuthRequest, res) => {
  try {
    const { title, amount, category } = req.body;
    const newExpense = new Expense({
      userId: req.user.id, // Get user ID from middleware
      title,
      amount,
      category,
    });

    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch expenses for the logged-in user
router.get("/", authMiddleware, async (req: AuthRequest, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id }).sort({
      date: -1,
    });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
