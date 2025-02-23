import Button from "../../components/button/Button";
import { ActionsWrapper, QuickAccessWrapper } from "./QuickAccess.styles";
import Modal from "../../components/modal/Modal"; // Import the Modal component
import { useState } from "react";
import AddExpenseForm from "../../components/forms/AddExpenseFrom";

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

  return (
    <QuickAccessWrapper>
      <h3>Quick Access</h3>
      <ActionsWrapper>
        <Button onClick={openModal}>Add expense</Button>
        <Button>Generate report</Button>
      </ActionsWrapper>

      {/* Modal for adding expense */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddExpenseForm isModalClosed={() => setIsModalOpen(false)} />
      </Modal>
    </QuickAccessWrapper>
  );
};

export default QuickAccess;
