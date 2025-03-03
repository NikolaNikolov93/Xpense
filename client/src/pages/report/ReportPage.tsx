import { useLocation } from "react-router-dom";
import useGenerateReport from "../../hooks/useGenerateCustomReport";

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
  console.log(queryParams.get("category"));

  // Fetch the report data using the custom hook
  const { data, isLoading, isError, error } = useGenerateReport(query);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Generated Report</h2>

      {/* Display filters used in the report */}
      <div style={{ marginBottom: "20px" }}>
        <strong>Filters:</strong>
        <p>From: {query.fromDate}</p>
        <p>To: {query.toDate}</p>
        <p>Sort By: {query.sortOrder}</p>
        <p>Category: {query.category || "All Categories"}</p>
      </div>

      {/* Report Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ccc" }}>
            <th style={{ padding: "8px", textAlign: "left" }}>ID</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Amount</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Date</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Category</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((expense: any) => (
            <tr key={expense._id} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "8px" }}>{expense._id}</td>
              <td style={{ padding: "8px" }}>${expense.amount.toFixed(2)}</td>
              <td style={{ padding: "8px" }}>
                {new Date(expense.date).toLocaleDateString()}
              </td>
              <td style={{ padding: "8px" }}>{expense.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* If no data */}
      {data?.length === 0 && <p>No expenses match the filter criteria.</p>}
    </div>
  );
};

export default ReportPage;
