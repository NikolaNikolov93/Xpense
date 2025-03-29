import { useParams } from "react-router-dom";
import { ExpenseDetailsWrapper } from "./ExpenseDetails.styles";

const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();

  return (
    <ExpenseDetailsWrapper>
      <h2>{expenseId}</h2>
      <p>Amount: {expenseId}</p>

      <p>Category: {expenseId}</p>
      <p>Description: {expenseId || "No description available"}</p>
    </ExpenseDetailsWrapper>
  );
};

export default ExpenseDetails;
