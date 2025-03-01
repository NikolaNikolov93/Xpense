export type Expense = {
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
};
export type PieChartReportProps = {
  expenses: Expense[] | undefined;
  isLoading: boolean;
  error: Error | null;
  days: number;
};

export const PieChartColorS = [
  "var(--primary-accent)", // Primary accent for a strong visual pop
  "var(--secondary-accent)", // Secondary accent for a call-to-action feel
  "#8ab3f8", // Lighter blue for variety
  "#6f92d3", // Blue shades for balance
  "#5678b9", // A darker blue for contrast
];

export type User = {
  id: string;
  name: string;
  email: string;
  currency: string;
  totalBalance: number;
  profilePicture: string;
};

export type UserState = {
  user: User | null;
  isAuthenticated: boolean;
};
export type ProfileImageTypes = {
  profilePicture: string | undefined;
  userName: string | undefined;
};
export type ProfileInfoTypes = {
  userName: string | undefined;
  currency: string | undefined;
  totalBalance: number | undefined;
};
