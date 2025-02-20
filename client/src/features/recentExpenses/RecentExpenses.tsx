import { RecentExpensesWrapper } from "./RecentExpenses.styles";
import { useFetchExpenses } from "../../hooks/useFetchExpenses";

const RecentExpenses = () => {
  const { data: expenses, error, isLoading } = useFetchExpenses();

  if (isLoading) {
    return <p>Loading expenses...</p>;
  }

  if (error instanceof Error) {
    return <p>Error fetching expenses: {error.message}</p>;
  }

  return (
    <RecentExpensesWrapper>
      <h3>Recent Expenses</h3>
      {expenses && expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id}>
              <h4>{expense.title}</h4>
              <p>{expense.category}</p>
              <p>${expense.amount}</p>
              <p>{new Date(expense.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses found.</p>
      )}
    </RecentExpensesWrapper>
  );
};

export default RecentExpenses;
