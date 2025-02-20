import styled from "styled-components";

export const DashboardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2em;
  h1 {
    flex: 1 1 100%;
  }
  > :not(h1) {
    box-shadow: var(--box-shadow);
    border-radius: 10px;
  }
`;
