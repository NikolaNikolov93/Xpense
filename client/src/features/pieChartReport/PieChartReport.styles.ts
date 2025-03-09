import styled from "styled-components";

export const ChartWrapper = styled.div`
  width: 100%;
  flex-basis: calc((100% - 2em) / 2);
  background-color: ${(props) => props.theme.cardBackgroundColor};
  padding: 1em 0em;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  box-shadow: ${(props) => props.theme.boxShadow};

  .recharts-cartesian-grid line {
    stroke: #8ab3f8; /* Your accent color */
    stroke-dasharray: 3 3;
  }

  .recharts-tooltip {
    background-color: white;
    border-radius: 5px;
    padding: 8px;
  }
  img {
    width: 200px;
  }
  @media (max-width: 660px) {
    flex-basis: 100%;
  }
`;
export const LoadingWrapper = styled.div`
  flex-basis: calc((100% - 2em) / 2);
  font-size: 1.5em;
`;
