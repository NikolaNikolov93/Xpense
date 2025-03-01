import React from "react";
import { ModalWrapper, ModalContent, CloseButton } from "./Modal.styles";

// Define the props for the Modal component
interface ModalProps {
  children: React.ReactNode; // Children that will be rendered inside the modal
  isOpen: boolean; // Whether the modal is open or closed
  onClose: () => void; // Function to close the modal
}

// Modal component - A reusable modal that displays content when isOpen is true
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Return null to prevent rendering if the modal is not open

  return (
    <ModalWrapper>
      <ModalContent>
        {/* Close button to trigger modal close */}
        <CloseButton onClick={onClose}>X</CloseButton>
        {children} {/* Render the modal content passed as children */}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
