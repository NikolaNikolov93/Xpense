import { AuthRequest } from "../middlewares/authMiddleware";
import Expense from "../models/Expense";
import AppError from "../utils/AppError";

export const addExpense = async (req: AuthRequest, res) => {
  try {
    const { title, amount, category } = req.body;
    if (!title || !amount || !category) {
      // Throwing an AppError with a 400 Bad Request status if required fields are missing
      throw new AppError("Missing required fields", 400);
    }
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
};
export const getLatestExpenses = async (req: AuthRequest, res) => {
  try {
    const limit = parseInt(req.query.limit as string) || 5; // Default to 5 if not provided

    const expenses = await Expense.find({ userId: req.user.id })
      .sort({ date: -1 }) // Sort by newest first
      .limit(limit); // Get only the latest X

    res.json(expenses);
  } catch (error) {
    throw new AppError("Error fetching latest expenses", 500);
  }
};

export const getLatestMonth = async (req: AuthRequest, res) => {
  try {
    const today = new Date();

    // Get the first and last days of last month
    const firstDayOfLastMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      1
    );

    const lastDayOfLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );
    lastDayOfLastMonth.setHours(23, 59, 59, 999); // Ensure full range for the last day

    console.log("First Day of Last Month:", firstDayOfLastMonth);
    console.log("Last Day of Last Month:", lastDayOfLastMonth);

    // Fetch last month's expenses
    let expenses = await Expense.find({
      userId: req.user.id,
      date: {
        $gte: firstDayOfLastMonth,
        $lte: lastDayOfLastMonth,
      },
    }).sort({ date: -1 });

    // If no expenses in last month, fetch last 30 days instead
    if (expenses.length === 0) {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(today.getDate() - 30);
      thirtyDaysAgo.setHours(0, 0, 0, 0); // Start of the day

      console.log(
        "No expenses found for last month. Fetching last 30 days instead."
      );
      console.log("From:", thirtyDaysAgo, "To:", today);

      expenses = await Expense.find({
        userId: req.user.id,
        date: {
          $gte: thirtyDaysAgo,
          $lte: today,
        },
      }).sort({ date: -1 });
    }

    res.json(expenses);
  } catch (error) {
    throw new AppError("Error fetching expenses for last month", 500);
  }
};
