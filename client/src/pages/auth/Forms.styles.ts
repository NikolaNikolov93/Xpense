import { motion } from "framer-motion";
import styled from "styled-components";

export const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--primary-text-color);
  flex: 1;
  max-width: 350px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--card-background-color);
  padding: 2em;
  box-shadow: var(--box-shadow);
  width: 100%;
  gap: 0.8em;
`;

export const Input = styled.input`
  padding: 0.8em;
  border: 1px solid var(--primary-accent);
  background-color: var(--sidebars-background-color);
  color: var(--primary-text-color);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--button-hover);
    box-shadow: var(--box-shadow-glow);
  }
`;
export const Message = styled(motion.p)<{ type: "success" | "error" }>`
  color: ${(props) =>
    props.type === "success"
      ? "var(--success-message-color)"
      : "var(--error-message-color)"};
  padding: 0.8em;
`;
