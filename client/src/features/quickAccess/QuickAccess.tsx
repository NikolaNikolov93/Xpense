import Button from "../../components/button/Button"; // Import Button component
import { ActionsWrapper, QuickAccessWrapper } from "./QuickAccess.styles"; // Import styled components for layout
import Modal from "../../components/modal/Modal"; // Import Modal component
import { useState } from "react"; // Import useState hook from React
import AddExpenseForm from "../../components/forms/AddExpenseFrom"; // Import AddExpenseForm component
import GenerateReport from "../../components/forms/GenerateReport";

// QuickAccess component - Provides quick actions such as adding an expense or generating a report
const QuickAccess: React.FC = () => {
  // State to manage the visibility of the modal
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] =
    useState<boolean>(false);
  const [isGenerateReportModalOpen, setIsGenerateReportModalOpen] =
    useState<boolean>(false);

  return (
    <QuickAccessWrapper>
      <h3>Quick Access</h3>
      <ActionsWrapper>
        <Button onClick={() => setIsAddExpenseModalOpen(true)}>
          Add expense
        </Button>
        <Button onClick={() => setIsGenerateReportModalOpen(true)}>
          Generate report
        </Button>
      </ActionsWrapper>

      <Modal
        isOpen={isAddExpenseModalOpen}
        onClose={() => setIsAddExpenseModalOpen(false)}
      >
        <AddExpenseForm closeModal={() => setIsAddExpenseModalOpen(false)} />
      </Modal>
      <Modal
        isOpen={isGenerateReportModalOpen}
        onClose={() => setIsGenerateReportModalOpen(false)}
      >
        <GenerateReport
          closeModal={() => setIsGenerateReportModalOpen(false)}
        />
      </Modal>
    </QuickAccessWrapper>
  );
};

export default QuickAccess;
