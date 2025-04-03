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
  "#e74c3c",
  "#2ecc71",
  "#9b59b6",
  "#f1c40f",
  "#e67e22",
  "#3498db",
  "#95a5a6",
  "#34495e",
];

export const DarkThemePieChartColors = [
  "#4a90e2",
  "#ffcc00",
  "#ff6b6b",
  "#66cdaa",
  "#d77cf8",
  "#ff8c00",
  "#20c997",
  "#c0392b",
  "#8e44ad",
  "#1abc9c",
  "#ff4757",
  "#a29bfe",
  "#2d3436",
];
export const shakeAnimation = {
  x: [-5, 5, -5, 5, 0], // Shake effect
  transition: { duration: 0.3 },
};
export const DemoUser = {
  email: "test@abv.bg",
  password: "123123",
};
