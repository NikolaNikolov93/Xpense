import styled from "styled-components";

export const RecentExpensesWrapper = styled.section`
  background-color: var(--card-background-color);
  padding: 1em 0em;
  h3 {
    border-bottom: 1px solid var(--primary-accent);
    margin-bottom: 1em;
  }
  table {
  }

  th,
  td {
    padding: 12px;
    border-bottom: 1px solid var(--primary-accent);
  }

  th {
    background-color: var(--primary-accent);
    color: #fff;
    text-transform: uppercase;
  }

  tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const TableWrapper = styled.div`
  padding: 1em;
`;
