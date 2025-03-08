import { useLocation } from "react-router-dom";
import useGenerateReport from "../../hooks/useGenerateCustomReport";
import Spinner from "../../components/spinner/Spinner";
import {
  ReportContainer,
  FiltersWrapper,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
  NoDataMessage,
} from "./ReportPage.styles"; // Import styled components
import { formatDate } from "../../utils/formatDate";

const ReportPage: React.FC = () => {
  const location = useLocation();

  // Get the query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const query = {
    fromDate: queryParams.get("fromDate"),
    toDate: queryParams.get("toDate"),
    sortOrder: queryParams.get("sortOrder"),
    category: queryParams.get("category"),
  };

  // Fetch the report data using the custom hook
  const { data, isLoading, isError, error } = useGenerateReport(query);

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <ReportContainer>
      <h1>Generated Report</h1>

      {/* Display filters used in the report */}
      <FiltersWrapper>
        <h4>Filters:</h4>
        {query.fromDate != "" ? (
          <p>From: {formatDate(query.fromDate)}</p>
        ) : (
          <></>
        )}
        {query.toDate != "" ? <p>To: {formatDate(query.toDate)}</p> : <></>}

        {query.sortOrder != "" ? <p>Sort by: {query.sortOrder}</p> : <></>}

        {query.category != "" ? <p>Category: {query.category}</p> : <></>}
      </FiltersWrapper>

      {/* Report Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {data?.map((expense: any) => (
            <TableRow key={expense._id}>
              <TableCell>{expense.title}</TableCell>
              <TableCell>${expense.amount.toFixed(2)}</TableCell>
              <TableCell>
                {new Date(expense.date).toLocaleDateString()}
              </TableCell>
              <TableCell>{expense.category}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {/* If no data */}
      {data?.length === 0 && (
        <NoDataMessage>No expenses match the filter criteria.</NoDataMessage>
      )}
    </ReportContainer>
  );
};

export default ReportPage;
