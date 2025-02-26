import { FormWrapper, Input } from "./AddExpenseFrom.styles";
import Button from "../button/Button";
import { useForm } from "../../hooks/useForm";
import { useAddExpense } from "../../hooks/useAddExpense";
import Spinner from "../spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateUserBalance } from "../../redux/userSlice";

interface AddExpenseFormProps {
  isModalClosed: () => void; // Function to close the modal
}

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ isModalClosed }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user); // Get the user from Redux
  const { mutate, isPending, isError, error } = useAddExpense();
  const { formData, handleChange, resetForm } = useForm({
    initialValues: {
      title: "",
      amount: "",
      category: "",
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    const expenseAmount = parseFloat(formData.amount);
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        resetForm(); // Reset form after successful submission
        isModalClosed();
        if (user) {
          const newBalance = user.totalBalance - expenseAmount;
          dispatch(updateUserBalance(newBalance)); // Update balance in Redux store
        }
      },
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <Input
        type="text"
        value={formData.title}
        name="title"
        placeholder="Add title.."
        onChange={handleChange}
        required
      />

      <Input
        type="number"
        id="amount"
        name="amount"
        value={formData.amount}
        placeholder="Amount"
        onChange={handleChange}
        required
        min="0" // Ensures the number is non-negative
        step="0.01" // Allows for decimal values
      />

      <Input
        type="text"
        name="category"
        value={formData.category}
        placeholder="Add category.."
        onChange={handleChange}
        required
      />
      {isPending ? <Spinner /> : <Button type="submit">Add Expense</Button>}
      {isError && <p>{error.message}</p>}
    </FormWrapper>
  );
};

export default AddExpenseForm;
