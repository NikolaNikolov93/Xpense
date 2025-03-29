import styled from "styled-components";

export const ReportContainer = styled.div`
  padding: 1em 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
`;

export const FiltersWrapper = styled.div`
  min-width: 200px;
  margin-bottom: 1em;
  background: ${(props) => props.theme.cardBackgroundColor};
  padding: 1em 0em;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;
export const ExpensesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const HeaderRow = styled.div`
  color: ${(props) => props.theme.accentColor};
  display: flex;
  gap: 2em;
  margin-bottom: 0.5em;
  span {
    padding: 0.5em;
  }
`;
export const NoDataMessage = styled.p`
  margin-top: 1em;
  color: ${(props) => props.theme.errorMessageColor};
  text-align: center;
  font-size: 1.1rem;
`;
