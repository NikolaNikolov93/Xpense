import styled from "styled-components";

export const RecentExpensesWrapper = styled.section`
  background-color: var(--card-background-color);
  padding: 1em 0em;
  flex-basis: calc((100% - 2em) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--box-shadow);

  h3 {
    border-bottom: 1px solid var(--secondary-accent);
    margin-bottom: 1em;
    /* width: 100%; */
  }
  table {
  }

  th,
  td {
    padding: 0.8em 0.2em;
    border-bottom: 1px solid var(--primary-accent);
    text-align: center;
  }

  th {
    background-color: var(--primary-accent);
    color: #fff;
    text-transform: uppercase;
  }

  tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 960px) {
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
