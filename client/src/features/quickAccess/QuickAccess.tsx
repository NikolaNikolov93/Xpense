import Button from "../../components/button/Button";
import { ActionsWrapper, QuickAccessWrapper } from "./QuickAccess.styles";
import Modal from "../../components/modal/Modal"; // Import the Modal component
import { useState } from "react";
import AddExpenseForm from "../../components/forms/addExpenseForm";

const QuickAccess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleAddExpense = (expenseData: {
    title: string;
    amount: number;
    category: string;
  }) => {
    console.log("Expense submitted: ", expenseData);
    // Here, you can add the logic to send the data to the backend or state management
    closeModal(); // Close the modal after submission
  };

  return (
    <QuickAccessWrapper>
      <h3>Quick Access</h3>
      <ActionsWrapper>
        <Button onClick={openModal}>Add expense</Button>
        <Button>Generate report</Button>
      </ActionsWrapper>

      {/* Modal for adding expense */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddExpenseForm onSubmit={handleAddExpense} />
      </Modal>
    </QuickAccessWrapper>
  );
};

export default QuickAccess;
