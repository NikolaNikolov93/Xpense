import { useLocation } from "react-router-dom";
import useGenerateReport from "../../hooks/useGenerateCustomReport";
import Spinner from "../../components/spinner/Spinner";
import {
  ReportContainer,
  FiltersWrapper,
  NoDataMessage,
  ExpensesWrapper,
  HeaderRow,
} from "./ReportPage.styles"; // Import styled components
import { formatDate } from "../../utils/formatDate";
import ExpenseCard from "../../components/expenseCard/ExpenseCard";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const ReportPage: React.FC = () => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user.user);

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
      <HeaderRow>
        <span>Title</span>
        <span>Currency</span>
        <span>Date</span>
      </HeaderRow>

      <ExpensesWrapper>
        {data?.map((expense: any) => (
          <ExpenseCard key={expense._id} expense={expense} user={user} />
        ))}
      </ExpensesWrapper>
      {/* If no data */}
      {data?.length === 0 && (
        <NoDataMessage>No expenses match the filter criteria.</NoDataMessage>
      )}
    </ReportContainer>
  );
};

export default ReportPage;
