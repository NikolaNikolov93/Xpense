import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BASE_URL } from "../constants";
import { Expense } from "../types/types";

// Define the type for the Expense

const fetchExpenses = async (): Promise<Expense[]> => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/expenses/latest?limit=5`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, // Send token in Authorization header
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
