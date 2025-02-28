import { AuthRequest } from "../middlewares/authMiddleware";
import Expense from "../models/Expense";
import User from "../models/User";
import AppError from "../utils/AppError";

export const addExpense = async (req: AuthRequest, res) => {
  try {
    const { title, amount, category } = req.body;

    if (!title || !amount || !category) {
      // Throwing an AppError with a 400 Bad Request status if required fields are missing
      throw new AppError("Missing required fields", 400);
    }

    // Retrieve the current user's balance
    const user = await User.findById(req.user.id);

    if (!user) {
      throw new AppError("User not found", 404);
    }

    // Check if the user has enough balance (optional validation)
    if (user.totalBalance < amount) {
      throw new AppError("Insufficient balance", 400);
    }

    // Create a new expense
    const newExpense = new Expense({
      userId: req.user.id, // Get user ID from middleware
      title,
      amount: parseFloat(amount),
      category,
    });

    // Save the expense
    await newExpense.save();

    // Update the user's balance by subtracting the expense amount
    user.totalBalance -= parseFloat(amount); // Decrease balance
    await user.save(); // Save the updated user balance

    // Return the created expense and updated user balance
    res.status(201).json({
      expense: newExpense,
      updatedBalance: user.totalBalance, // Include the updated balance in the response
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

export const getExpensesForLastNDays = async (req: AuthRequest, res) => {
  try {
    const today = new Date();
    const { days } = req.query; // Get the 'days' query parameter

    // Ensure 'days' is a number and has a default value of 30 if not provided
    const numberOfDays = parseInt(days as string) || 30;

    // Calculate the date for 'numberOfDays' ago
    const startDate = new Date();
    startDate.setDate(today.getDate() - numberOfDays); // Get the date for X days ago

    // Ensure the time for 'startDate' starts from 00:00:00.000
    startDate.setHours(0, 0, 0, 0);

    // Fetch expenses from the last 'numberOfDays' days
    const expenses = await Expense.find({
      userId: req.user.id,
      date: {
        $gte: startDate, // Greater than or equal to 'numberOfDays' ago
        $lte: today, // Less than or equal to today
      },
    }).sort({ date: -1 }); // Sort by date, newest first

    res.json(expenses);
  } catch (error) {
    throw new AppError(
      `Error fetching expenses for the last ${req.query.days || 30} days`,
      500
    );
  }
};
