import styled from "styled-components";

export const DashboardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2em;
  max-width: 100%;
  h1 {
    flex: 1 1 100%;
    font-weight: bold;
  }
  > * {
    border-radius: 30px;
  }
`;
export const UserActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  > * {
    border-radius: 30px;
  }

  flex-basis: calc((100% - 2em) / 2);
  @media (max-width: 1003px) {
    flex-basis: 100%;
  }
`;
