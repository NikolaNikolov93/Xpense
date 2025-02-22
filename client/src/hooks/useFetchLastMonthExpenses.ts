import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BASE_URL } from "../constants";

// Define the type for the Expense
interface Expense {
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

const fetchLastMonthExpenses = async (): Promise<Expense[]> => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/expenses/lastMonth`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch last month's expenses");
  }

  return response.json();
};

// ✅ Hook for fetching last month's expenses
export const useFetchLastMonthExpenses = (): UseQueryResult<
  Expense[],
  Error
> => {
  return useQuery<Expense[], Error>({
    queryKey: ["lastMonthExpenses"],
    queryFn: fetchLastMonthExpenses,
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    refetchInterval: 5000,
    refetchOnWindowFocus: false, // Avoid refetching on window focus
  });
};
