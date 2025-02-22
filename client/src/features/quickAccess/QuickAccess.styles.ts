import styled from "styled-components";

export const QuickAccessWrapper = styled.section`
  background-color: var(--card-background-color);
  flex: 1 1 100%;
  padding: 1em 0em;
  box-shadow: var(--box-shadow);

  h3 {
    border-bottom: 1px solid var(--secondary-accent);
    margin-bottom: 1em;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
