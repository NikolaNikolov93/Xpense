import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import Spinner from "../../components/spinner/Spinner";
import EmptyData from "../../components/emptyData/EmptyData";
import { ChartWrapper, LoadingWrapper } from "./PieChartReport.styles";
import { PieChartColorS, PieChartReportProps } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const PieChartReport: React.FC<PieChartReportProps> = ({
  expenses,
  isLoading,
  error,
  days,
}) => {
  const user = useSelector((state: RootState) => state.user.user); // Access user from Redux store

  if (isLoading)
    return (
      <LoadingWrapper>
        <Spinner />
      </LoadingWrapper>
    );
  if (error instanceof Error)
    return <LoadingWrapper>Something went wrong...</LoadingWrapper>;
  if (expenses?.length === 0)
    return (
      <ChartWrapper>
        <EmptyData />
      </ChartWrapper>
    );

  // Aggregate expenses by category
  const chartData = expenses?.reduce<{ category: string; total: number }[]>(
    (acc, expense) => {
      const existing = acc.find((item) => item.category === expense.category);
      if (existing) {
        existing.total += expense.amount;
      } else {
        acc.push({ category: expense.category, total: expense.amount });
      }
      return acc;
    },
    []
  );

  // Calculate the total amount spent
  const totalAmountSpent = chartData?.reduce(
    (sum, item) => sum + item.total,
    0
  );

  return (
    <ChartWrapper>
      <h4>{`Expenses for the past ${days} days`}</h4>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="total"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="var(--primary-accent)"
            label
            isAnimationActive={true}
          >
            {chartData?.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={PieChartColorS[index % PieChartColorS.length]}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#2b2b2b", // Use dark card background
              border: "none",
              color: "var(--primary-text-color)",
            }}
            itemStyle={{
              color: "var(--primary-accent)",
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
