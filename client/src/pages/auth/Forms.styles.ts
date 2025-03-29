import { motion } from "framer-motion";
import styled from "styled-components";

export const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  flex: 1;
  max-width: 350px;
  & h6 {
    color: ${(props) => props.theme.errorMessageColor};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.cardBackgroundColor};
  padding: 2em;
  box-shadow: ${(props) => props.theme.boxShadow};
  gap: 0.8em;
`;

export const Input = styled(motion.input)`
  padding: 0.8em;
  border: 1px solid ${(props) => props.theme.accentColor};
  background-color: ${(props) => props.theme.sidebarBackgroundColor};
  color: ${(props) => props.theme.textColor};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accentColor};
    box-shadow: ${(props) => props.theme.boxShadowGlow};
  }
`;
export const Message = styled(motion.p)<{ type: "success" | "error" }>`
  color: ${(props) =>
    props.type === "success"
      ? props.theme.successMessageColor
      : props.theme.errorMessageColor};
  padding: 0.8em;
`;
export const Error = styled(motion.p)`
  color: ${(props) => props.theme.errorMessageColor}; // Use your error color
  font-size: 0.9em;
  text-align: center;
`;
