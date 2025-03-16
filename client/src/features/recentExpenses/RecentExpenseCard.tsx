import { Expense, User } from "../../types/types";
import { CardWrapper } from "./RecentExpenseCard.styles";

interface RecentExpenseCardProps {
  expense: Expense;
  user: User | null;
}
const RecentExpenseCard: React.FC<RecentExpenseCardProps> = ({
  expense,
  user,
}) => {
  return (
    <CardWrapper
      to={`${expense.title}/${expense._id}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
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

export default RecentExpenseCard;
