import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BASE_URL } from "../constants";
import { Expense } from "../types/types";

const fetchExpenseById = async (expenseId: string): Promise<Expense> => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/expenses/${expenseId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch expense");
  }

  return response.json();
};

// Custom hook to fetch an expense by ID
export const useFetchExpense = (
  expenseId: string
): UseQueryResult<Expense, Error> => {
  return useQuery<Expense, Error>({
    queryKey: ["expense", expenseId],
    queryFn: () => fetchExpenseById(expenseId),
    enabled: !!expenseId, // Prevents execution if no ID is provided
    refetchInterval: 10000, // Auto-refresh every 10 seconds
  });
};
