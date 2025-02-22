import React, { useState } from "react";
import { FormWrapper, Input, SubmitButton } from "./addExpenseForm.styles";

interface AddExpenseFormProps {
  onSubmit: (expenseData: {
    title: string;
    amount: number;
    category: string;
  }) => void;
}

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, amount, category });
    // Reset form
    setTitle("");
    setAmount(0);
    setCategory("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <Input
        type="text"
        value={title}
        placeholder="Add title.."
        onChange={(e: any) => setTitle(e.target.value)}
        required
      />

      <Input
        type="number"
        id="amount"
        value={amount}
        placeholder="Amount"
        onChange={(e: any) => setAmount(e.target.value)}
        required
        min="0" // Ensures the number is non-negative
        step="0.01" // Allows for decimal values
      />

      <Input
        type="text"
        value={category}
        placeholder="Add category.."
        onChange={(e: any) => setCategory(e.target.value)}
        required
      />
      <SubmitButton type="submit">Add Expense</SubmitButton>
    </FormWrapper>
  );
};

export default AddExpenseForm;
