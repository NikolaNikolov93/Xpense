import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BASE_URL } from "../constants";
import { Expense } from "../types/types";

// Define the type for the Expense

const fetchExpensesForLastNDays = async (days: number): Promise<Expense[]> => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/expenses/lastNDays?days=${days}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch expenses for the last ${days} days`);
  }

  return response.json();
};

// ✅ Hook for fetching expenses for a dynamic number of days
export const useFetchExpensesForLastNDays = (
  days: number
): UseQueryResult<Expense[], Error> => {
  return useQuery<Expense[], Error>({
    queryKey: [`last${days}DaysExpenses`], // Dynamically change query key based on 'days'
    queryFn: () => fetchExpensesForLastNDays(days),
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    refetchInterval: 5000,
    refetchOnWindowFocus: false, // Avoid refetching on window focus
  });
};
