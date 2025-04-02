import { CATEGORY_ICONS } from "../../categories-icon";
import { Expense, User } from "../../types/types";
import { CardWrapper } from "./ExpenseCard.styles";

interface ExpenseCardProps {
  expense: Expense;
  user: User | null;
}
const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense, user }) => {
  return (
    <CardWrapper
      to={`/expense/${expense._id}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {CATEGORY_ICONS[expense.category] || CATEGORY_ICONS["Other"]}
      <p>{expense.title}</p>
      <p>{`${expense.amount.toFixed(2)} ${user?.currency}`}</p>
      <p>
        {new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date(expense.date))}
      </p>
    </CardWrapper>
  );
};

export default ExpenseCard;
