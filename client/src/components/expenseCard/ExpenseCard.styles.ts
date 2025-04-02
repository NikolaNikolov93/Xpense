import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled(motion.create(Link))`
  padding: 1.5em 1em;
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.textColor};
  font-weight: 400;
  background-color: ${(props) => props.theme.cardBackgroundColor};
  &:hover {
    background-color: ${(props) => props.theme.fieldHover};
  }
  svg {
    color: ${(props) => props.theme.accentColor};
  }
`;
