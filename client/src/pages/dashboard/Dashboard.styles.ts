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
