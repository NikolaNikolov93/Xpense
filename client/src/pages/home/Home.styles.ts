import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  text-align: center;
  gap: 1em;
  text-shadow: 2px 2px 5px rgba(31, 31, 31, 0.5);
`;

export const Logo = styled.img`
  width: 200px;
`;

export const Warning = styled.p`
  background-color: var(--error-message-color);
  color: var(--primary-text-color);
  padding: 1em;
  font-weight: bold;
  max-width: 400px;
`;

export const TestCredentials = styled.p`
  background-color: var(--primary-accent);
  color: var(--primary-text-color);
  padding: 1em;
  font-weight: bold;
  max-width: 400px;
`;
export const GitHubLink = styled.a`
  color: var(--primary-accent);
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--button-hover);
  }
`;
