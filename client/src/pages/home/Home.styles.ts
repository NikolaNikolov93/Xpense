import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1em;
  text-shadow: 2px 2px 5px rgba(31, 31, 31, 0.5);
`;
export const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 0.5em;
  h1 {
    font-weight: bold;
  }
  h4 {
    color: ${(props) => props.theme.accentColor};
  }
`;
export const HeadlineButtonsWrapper = styled.div`
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
`;
export const LogoWrapper = styled.div`
  flex-grow: 1;
`;
export const Logo = styled(motion.img)`
  max-width: 350px;
`;
export const GitHubLinkWrapper = styled.div`
  flex: 1 1 100%;
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
