import styled from "styled-components";

export const FooterWrapper = styled.section`
  flex: 1 1 100%;
  margin-top: 2em;
`;

export const GitHubLink = styled.a`
  color: ${(props) => props.theme.accentColor};
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.buttonHover};
  }
`;
