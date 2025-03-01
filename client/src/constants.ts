const env = import.meta.env.VITE_ENV_VARIABLE;

export const BASE_URL =
  env === "production"
    ? import.meta.env.VITE_API_URL
    : import.meta.env.VITE_API_URL_DEV;

export const CATEGORIES = [
  "Housing",
  "Transportation",
  "Groceries",
  "Dining out",
  "Entertainment",
  "Health & Fitness",
  "Shopping",
  "Travel",
  "Debt & Loans",
  "Education",
  "Gifts & Donations",
  "Personal Care",
  "Other",
];

export const PieChartColorS = [
  "var(--primary-accent)", // Primary accent for a strong visual pop
  "var(--secondary-accent)", // Secondary accent for a call-to-action feel
  "#8ab3f8", // Lighter blue for variety
  "#6f92d3", // Blue shades for balance
  "#5678b9", // A darker blue for contrast
];
