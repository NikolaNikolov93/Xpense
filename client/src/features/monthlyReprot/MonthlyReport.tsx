import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { ChartWrapper, LoadingWrapper } from "./MonthlyReport.styles";
import Spinner from "../../components/spinner/Spinner";
import { useFetchLastMonthExpenses } from "../../hooks/useFetchLastMonthExpenses";

const COLORS = ["#8ab3f8", "#a5bfeb", "#6f92d3", "#c4daf9", "#5678b9"]; // Define colors for the slices

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
            outerRadius={100}
            fill="#8ab3f8"
            label
          >
            {chartData?.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default MonthlyReport;
