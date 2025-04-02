import styled from "styled-components";

export const RecentExpensesWrapper = styled.section`
  background-color: ${(props) => props.theme.cardBackgroundColor};
  padding: 1em 0em;
  flex-basis: calc((100% - 2em) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${(props) => props.theme.boxShadow};

  h3 {
    margin-bottom: 1em;
    font-weight: bold;
  }

  @media (max-width: 1003px) {
    flex-basis: 100%;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const HeaderRow = styled.div`
  display: flex;
  gap: 2em;
  margin-bottom: 0.5em;
  span {
    padding: 0.5em;
  }
`;

export const LoadingWrapper = styled.div`
  flex-basis: calc((100% - 2em) / 2);
  font-size: 1.5em;
`;
