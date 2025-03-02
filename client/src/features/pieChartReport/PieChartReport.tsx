import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts"; // Import recharts components for the pie chart
import Spinner from "../../components/spinner/Spinner"; // Import the Spinner component
import EmptyData from "../../components/emptyData/EmptyData"; // Import the EmptyData component
import { ChartWrapper, LoadingWrapper } from "./PieChartReport.styles"; // Import styled components for layout
import { PieChartReportProps } from "../../types/types"; // Import component props
import { PieChartColorS } from "../../constants"; // Import chart colors
import { useSelector } from "react-redux"; // Import Redux hooks
import { RootState } from "../../redux/store"; // Import RootState type for accessing the Redux store

// PieChartReport component - Displays a pie chart of expenses over a given period
const PieChartReport: React.FC<PieChartReportProps> = ({
  expenses, // List of expenses to display in the chart
  isLoading, // Loading state to show a spinner while data is being fetched
  error, // Error state to show an error message if something goes wrong
  days, // Number of days the report is based on
}) => {
  // Access the user data from the Redux store
  const user = useSelector((state: RootState) => state.user.user);

  // Show a spinner if the data is still loading
  if (isLoading)
    return (
      <LoadingWrapper>
        <Spinner />
      </LoadingWrapper>
    );

  // Show an error message if there is an error
  if (error instanceof Error)
    return <LoadingWrapper>Something went wrong...</LoadingWrapper>;

  // Show an empty state if no expenses are available
  if (expenses?.length === 0)
    return (
      <ChartWrapper>
        <EmptyData />
        <h4>{`for the past ${days} days...`}</h4>
      </ChartWrapper>
    );

  // Aggregate expenses by category (sum up amounts for each category)
  const chartData = expenses?.reduce<{ category: string; total: number }[]>(
    (acc, expense) => {
      const existing = acc.find((item) => item.category === expense.category); // Check if category already exists in the accumulator
      if (existing) {
        existing.total += expense.amount; // Add amount to existing category
      } else {
        acc.push({ category: expense.category, total: expense.amount }); // Add new category with the amount
      }
      return acc; // Return the updated accumulator
    },
    []
  );

  // Calculate the total amount spent across all categories
  const totalAmountSpent = chartData?.reduce(
    (sum, item) => sum + item.total, // Add up the totals for each category
    0
  );

  return (
    <ChartWrapper>
      <h4>{`Expenses for the past ${days} days`}</h4>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData} // Provide the data for the pie chart
            dataKey="total" // The data key for the chart (amount spent)
            nameKey="category" // The name of each pie slice (category)
            cx="50%" // Position the chart at the center horizontally
            cy="50%" // Position the chart at the center vertically
            outerRadius={120} // Set the outer radius of the pie chart
            fill="var(--primary-accent)" // Fill color for the pie slices
            label // Show labels on the pie slices
            isAnimationActive={true} // Enable animation
          >
            {chartData?.map((_, index) => (
              <Cell
                key={`cell-${index}`} // Unique key for each cell
                fill={PieChartColorS[index % PieChartColorS.length]} // Assign a color from the PieChartColorS array
                style={{
                  cursor: "pointer", // Change cursor to pointer for interactivity
                  transition: "transform 0.3s ease-in-out", // Smooth transition for hover effects
                }}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#2b2b2b", // Dark background for the tooltip
              border: "none", // No border
              color: "var(--primary-text-color)", // Text color for the tooltip
            }}
            itemStyle={{
              color: "var(--primary-accent)", // Accent color for the item in the tooltip
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      {totalAmountSpent !== undefined && (
        <div>
          <strong>{`Total: ${totalAmountSpent.toFixed(2)} ${
            user?.currency
          }`}</strong>
        </div>
      )}
    </ChartWrapper>
  );
};

export default PieChartReport;
