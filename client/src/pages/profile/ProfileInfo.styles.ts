import { motion } from "framer-motion";
import styled from "styled-components";

export const ProfleInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;
export const FormField = styled.div`
  padding: 0.3em;
  display: flex;
  align-items: center;
  gap: 0.5em;

  label {
    width: 120px; /* Set a fixed width for the label */
    text-align: right; /* Align text to the right */
  }

  input {
    flex: 1; /* Allow input to take the remaining space */
    width: 100%; /* Ensure it expands */
    padding: 0.5em;
  }
`;
export const ButtonsSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 100px;
  }
`;
export const StyledUpProfileInfoSuccessMessage = styled.h5`
  color: ${(props) => props.theme.successMessageColor};
`;
export const StyledProfileInfoErrorMessage = styled.h5`
  color: ${(props) => props.theme.errorMessageColor};
`;
export const InputError = styled(motion.p)`
  color: ${(props) => props.theme.errorMessageColor}; // Use your error color
  font-size: 0.9em;
  text-align: center;
`;
export const ThemeSwticher = styled.button`
  position: relative;
  width: 50px;
  height: 26px;
  background: ${(props) => props.theme.secondaryAccentColor};
  border-radius: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  transition: background 0.3s ease-in-out;
  align-self: center;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: ${(props) => props.theme.textColor};
    border-radius: 50%;
    position: absolute;
    left: ${({ theme }) =>
      theme.backgroundColor === "#181818" ? "26px" : "2px"};
    transition: left 0.3s ease-in-out, background 0.3s ease-in-out;
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;
