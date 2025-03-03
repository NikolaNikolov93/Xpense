import { FormWrapper, Input, Select } from "./AddExpenseFrom.styles";
import Button from "../button/Button";
import { useForm } from "../../hooks/useForm";
import { useAddExpense } from "../../hooks/useAddExpense";
import Spinner from "../spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateUserBalance } from "../../redux/userSlice";
import { CATEGORIES } from "../../constants";
import { AddExpenseFormProps } from "../../types/types";

// AddExpenseForm Component - Allows the user to add an expense.
const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ closeModal }) => {
  // Dispatch action to update user balance in Redux store
  const dispatch = useDispatch();

  // Get the current user from the Redux store
  const user = useSelector((state: RootState) => state.user.user);

  // Use custom hook for adding expenses with React Query
  const { mutate, isPending, isError, error } = useAddExpense();

  // Use custom form hook for managing form state
  const { formData, handleChange, resetForm } = useForm({
    initialValues: {
      title: "", // Initialize form fields with empty values
      amount: "",
      category: "",
    },
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expenseAmount = parseFloat(formData.amount); // Convert amount to float

    // Mutate the form data and handle success
    mutate(formData, {
      onSuccess: () => {
        console.log("uscess");

        resetForm(); // Reset form after successful submission
        closeModal(); // Close the modal
        if (user) {
          const newBalance = user.totalBalance - expenseAmount; // Calculate new balance
          dispatch(updateUserBalance(newBalance)); // Update balance in Redux store
        }
      },
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <Input //Input for the title of the expense
        type="text"
        value={formData.title}
        name="title"
        placeholder="Add title.."
        onChange={handleChange}
        required // Make the title input field required
      />

      <Input //Input for the amount of the expense
        type="number"
        id="amount"
        name="amount"
        value={formData.amount}
        placeholder="Amount"
        onChange={handleChange}
        required
        min="0" // Ensures that the amount is non-negative
        step="0.01" // Allows for decimal values
      />

      <Select //Dropdown for selecting the category of the expense
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Please select a category</option>
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>

      {isPending ? <Spinner /> : <Button type="submit">Add Expense</Button>}
      {isError && <p>{error.message}</p>}
    </FormWrapper>
  );
};

export default AddExpenseForm;
