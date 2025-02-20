import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useFetchExpenses } from "../../hooks/useFetchExpenses";
import { ChartWrapper } from "./MonthlyReport.styles";
const MonthlyReport = () => {
  const { data: expenses, isLoading, error } = useFetchExpenses();

  if (isLoading) return <p>Loading chart...</p>;
  if (error instanceof Error) return <p>Error loading data: {error.message}</p>;

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
        <BarChart data={chartData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8ab3f8" />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};
export default MonthlyReport;
