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
    border-bottom: 1px solid ${(props) => props.theme.secondaryAccentColor};
    margin-bottom: 1em;
    /* width: 100%; */
  }
  table {
  }

  th,
  td {
    padding: 0.8em 0.2em;
    border-bottom: 1px solid ${(props) => props.theme.accentColor};
    text-align: center;
  }

  th {
    background-color: ${(props) => props.theme.accentColor};
    color: #fff;
    text-transform: uppercase;
  }

  tbody tr:hover {
    background-color: ${(props) => props.theme.fieldHover};
  }
  @media (max-width: 1003px) {
    flex-basis: 100%;
  }
`;
export const TableWrapper = styled.div`
  padding: 0.5em;
`;
export const LoadingWrapper = styled.div`
  flex-basis: calc((100% - 2em) / 2);
  font-size: 1.5em;
`;
