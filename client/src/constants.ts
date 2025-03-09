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

export const LightThemePieChartColors = [
  "#1d72b8",
  "#f39c12",
  "#8ab3f8",
  "#6f92d3",
  "#5678b9",
];
export const DarkThemePieChartColors = [
  "#4a90e2",
  "#ffcc00",
  "#ff6b6b",
  "#66cdaa",
  "#d77cf8",
];
