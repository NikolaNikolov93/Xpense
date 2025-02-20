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

const fetchExpenses = async (): Promise<Expense[]> => {
  const response = await fetch(`${BASE_URL}/expenses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Ensure cookies are sent with the request
  });

  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }

  return response.json();
};

// Use the correct typing for the result of useQuery
export const useFetchExpenses = (): UseQueryResult<Expense[], Error> => {
  return useQuery<Expense[], Error>({
    queryKey: ["expenses"], // Correctly typed queryKey
    queryFn: fetchExpenses,
    refetchInterval: 10000,
  });
};
