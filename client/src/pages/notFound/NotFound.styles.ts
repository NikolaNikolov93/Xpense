import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centers vertically */
  text-align: center;
  gap: 1em;
  height: 100vh; /* Takes full viewport height */
  width: 100%; /* Ensures it spans full width */
`;

export const NotFoundTitle = styled.h1`
  color: ${(props) =>
    props.theme.errorMessageColor}; /* Red accent to make it stand out */
`;

export const NotFoundText = styled.p`
  color: ${(props) => props.theme.textColor};
`;

export const NotFoundImage = styled.img`
  max-width: 400px;
`;

export const HomeLink = styled(Link)`
  padding: 1em 2em;
  background-color: ${(props) =>
    props.theme.accentColor}; /* Xpense accent color */
  color: ${(props) => props.theme.textColor};
  text-shadow: ${(props) => props.theme.boxShadow};
  font-weight: bold;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover}; /* Hover effect */
  }
`;
