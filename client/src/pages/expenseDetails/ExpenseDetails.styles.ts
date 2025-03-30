import styled from "styled-components";

export const ExpenseDetailsWrapper = styled.div`
  background: ${({ theme }) => theme.cardBackgroundColor};
  padding: 2em;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.primaryText};
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin: 5px 0;
  }
`;
