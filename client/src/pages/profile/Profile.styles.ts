import styled from "styled-components";

export const ProfileWrapper = styled.section`
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3em;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.cardBackgroundColor};
  border-radius: 30px;
`;
