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

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
  background: ${(props) => props.theme.cardBackgroundColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 8px;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background: ${(props) => props.theme.accentColor};
  color: white;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 0.7em 0.3em;
  text-align: left;
`;

export const TableHeaderCell = styled.th`
  padding: 0.6em;
  text-align: left;
  font-weight: bold;
`;

export const NoDataMessage = styled.p`
  margin-top: 1em;
  color: ${(props) => props.theme.errorMessageColor};
  text-align: center;
  font-size: 1.1rem;
`;
