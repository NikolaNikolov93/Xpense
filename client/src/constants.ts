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
