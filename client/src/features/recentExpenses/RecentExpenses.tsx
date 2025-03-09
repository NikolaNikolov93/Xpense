import {
  LoadingWrapper,
  RecentExpensesWrapper,
  TableWrapper,
} from "./RecentExpenses.styles"; // Import styled components for layout
import { useFetchExpenses } from "../../hooks/useFetchExpenses"; // Custom hook to fetch expenses
import Spinner from "../../components/spinner/Spinner"; // Spinner component for loading state
import { useSelector } from "react-redux"; // Redux hook to access state
import { RootState } from "../../redux/store"; // RootState type from Redux store

// RecentExpenses component - Displays a list of recent expenses in a table format
const RecentExpenses: React.FC = () => {
  // Fetch expenses data using the custom hook
  const { data: expenses, error, isLoading } = useFetchExpenses();
  // Access user data from Redux store to get currency information
  const user = useSelector((state: RootState) => state.user.user);

  // Show loading spinner while the data is being fetched
  if (isLoading) {
    return (
      <LoadingWrapper>
        <Spinner /> {/* Display spinner while loading */}
      </LoadingWrapper>
    );
  }

  // Handle error state if fetching expenses failed
  if (error instanceof Error) {
    return <LoadingWrapper>{error.message}</LoadingWrapper>;
  }

  return (
    <RecentExpensesWrapper>
      <h3>Recent Expenses</h3>
      <TableWrapper>
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
                  <td>{`${expense.amount.toFixed(2)} ${user?.currency}`}</td>
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
          <p>No expenses found.</p> // Message to display if there are no expenses
        )}
      </TableWrapper>
    </RecentExpensesWrapper>
  );
};

export default RecentExpenses;
