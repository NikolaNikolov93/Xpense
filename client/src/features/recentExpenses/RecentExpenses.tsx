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
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense._id}>
                <td>{expense.title}</td>
                <td>{expense.category}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>
                  {new Intl.DateTimeFormat("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  }).format(new Date(expense.date))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No expenses found.</p>
      )}
    </RecentExpensesWrapper>
  );
};

export default RecentExpenses;
