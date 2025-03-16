import {
  CardsWrapper,
  LoadingWrapper,
  RecentExpensesWrapper,
} from "./RecentExpenses.styles"; // Import styled components for layout
import { useFetchExpenses } from "../../hooks/useFetchExpenses"; // Custom hook to fetch expenses
import Spinner from "../../components/spinner/Spinner"; // Spinner component for loading state
import { useSelector } from "react-redux"; // Redux hook to access state
import { RootState } from "../../redux/store"; // RootState type from Redux store
import RecentExpenseCard from "./RecentExpenseCard";

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
      <CardsWrapper>
        {expenses && expenses.length > 0 ? (
          expenses.map((expense) => (
            <RecentExpenseCard
              key={expense._id}
              expense={expense}
              user={user}
            />
          ))
        ) : (
          <p>No expenses found.</p> // Message to display if there are no expenses
        )}
      </CardsWrapper>
    </RecentExpensesWrapper>
  );
};

export default RecentExpenses;
