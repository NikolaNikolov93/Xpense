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
  gap: 0.5em;
  h1 {
    font-weight: bold;
  }
  h4 {
    margin-bottom: 2em;
    color: ${(props) => props.theme.accentColor};
  }
`;
export const HeadingAndLogoWrapepr = styled.div`
  display: flex;
  gap: 1em;
  align-self: center;
`;
export const HeadlineButtonsWrapper = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
`;

export const Logo = styled(motion.img)`
  max-width: 50px;
`;
export const FeaturesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  flex-basis: 100%;
  img {
    max-width: 150px;
  }
`;
export const FeatureSectionElement = styled.div`
  flex-basis: calc((100% - 2 * 1em) / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  justify-content: space-between;
  h6 {
    font-weight: bold;
  }
  @media (max-width: 600px) {
    flex-basis: 100%;
  }
`;

export const SiteShowcase = styled.div`
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 6em;
`;
export const SiteShowcaseItem = styled.div`
  max-width: 700px;
  display: flex;
  align-items: center;
  gap: 2em;
  h2 {
    font-weight: bold;
    margin-bottom: 0.5em;
    color: ${(props) => props.theme.accentColor};
  }

  img {
    max-width: 350px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
