import { useParams } from "react-router-dom";
import { ExpenseDetailsWrapper } from "./ExpenseDetails.styles";
import { useFetchExpense } from "../../hooks/useFetchExpenseDetails";
import Spinner from "../../components/spinner/Spinner";
import EmptyData from "../../components/emptyData/EmptyData";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  const { data: expense, isPending, error } = useFetchExpense(expenseId!);
  const user = useSelector((state: RootState) => state.user.user);

  if (isPending)
    return (
      <>
        <Spinner />
      </>
    );
  if (error) return <EmptyData />;
  if (!expense) return <p>Expense not found</p>;

  return (
    <ExpenseDetailsWrapper>
      <h2>{expense?.title}</h2>
      <p>{`Amount: ${expense.amount} ${user?.currency}`}</p>

      <p>Category: {expense?.category}</p>
    </ExpenseDetailsWrapper>
  );
};

export default ExpenseDetails;
