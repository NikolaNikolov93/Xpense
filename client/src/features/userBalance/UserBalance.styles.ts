import styled from "styled-components";

export const UserBalanceWrapper = styled.div`
  background-color: ${(props) => props.theme.cardBackgroundColor};
  padding: 1em 0em;
  flex-basis: calc((100% - 2em) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media (max-width: 1003px) {
    flex-basis: 100%;
  }
`;
