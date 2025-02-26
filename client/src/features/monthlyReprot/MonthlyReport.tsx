import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { ChartWrapper, LoadingWrapper } from "./MonthlyReport.styles";
import Spinner from "../../components/spinner/Spinner";
import { useFetchLastMonthExpenses } from "../../hooks/useFetchLastMonthExpenses";
import EmptyData from "../../components/emptyData/EmptyData";

// Color palette from your CSS root variables
const COLORS = [
  "var(--primary-accent)", // Primary accent for a strong visual pop
  "var(--secondary-accent)", // Secondary accent for a call-to-action feel
  "#8ab3f8", // Lighter blue for variety
  "#6f92d3", // Blue shades for balance
  "#5678b9", // A darker blue for contrast
];

const MonthlyReport = () => {
  const { data: expenses, isLoading, error } = useFetchLastMonthExpenses();

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

  return (
    <ChartWrapper>
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
                fill={COLORS[index % COLORS.length]}
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
    </ChartWrapper>
  );
};

export default MonthlyReport;
