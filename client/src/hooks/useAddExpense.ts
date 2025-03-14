import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from "@tanstack/react-query";
import { BASE_URL } from "../constants";

// Define the type for the Expense input (without _id and date, since the backend likely generates them)
interface NewExpense {
  title: string;
  amount: string;
  category: string;
}

const addExpense = async (expense: NewExpense): Promise<void> => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/expenses`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(expense),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to add expense");
  }
};

// Custom hook to add an expense
export const useAddExpense = (): UseMutationResult<void, Error, NewExpense> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addExpense,
    onSuccess: () => {
      // Invalidate and refetch expenses after adding a new one
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
      for (let days = 1; days <= 30; days++) {
        queryClient.invalidateQueries({
          queryKey: [`last${days}DaysExpenses`],
        });
      }
    },
    onError: (error: any) => {
      return error.message;
    },
  });
};
