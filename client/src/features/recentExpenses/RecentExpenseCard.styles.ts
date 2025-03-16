import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled(motion.create(Link))`
  padding: 1em 0.5em;
  display: flex;
  justify-content: center;
  gap: 0.5em;
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.secondaryAccentColor};
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8); /* Subtle text shadow */
`;
