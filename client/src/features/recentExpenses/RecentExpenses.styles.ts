import styled from "styled-components";

export const RecentExpensesWrapper = styled.section`
  background-color: var(--card-background-color);
  padding: 1em;
  box-shadow: var(--box-shadow);
  table {
    width: 100%;
    margin-top: 1em;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    overflow: hidden;
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
