import styled from "styled-components";

export const DashboardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2em;
  max-width: 100%;
  h1 {
    flex: 1 1 100%;
  }
  > * {
    border-radius: 30px;
  }
`;
export const ThemeSwticher = styled.button`
  position: relative;
  width: 50px;
  height: 26px;
  background: ${(props) => props.theme.secondaryAccentColor};
  border-radius: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  transition: background 0.3s ease-in-out;
  align-self: center;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: ${(props) => props.theme.textColor};
    border-radius: 50%;
    position: absolute;
    left: ${({ theme }) =>
      theme.backgroundColor === "#181818" ? "26px" : "2px"};
    transition: left 0.3s ease-in-out, background 0.3s ease-in-out;
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;
