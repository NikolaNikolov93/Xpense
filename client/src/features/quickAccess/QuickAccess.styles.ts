import styled from "styled-components";

export const QuickAccessWrapper = styled.section`
  background-color: ${(props) => props.theme.cardBackgroundColor};
  flex: 1 1 100%;
  padding: 1em 0em;
  box-shadow: ${(props) => props.theme.boxShadow};

  h3 {
    border-bottom: 1px solid ${(props) => props.theme.secondaryAccentColor};
    margin-bottom: 1em;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
