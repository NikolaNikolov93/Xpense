import PieChartReport from "../../features/pieChartReport/PieChartReport";
import QuickAccess from "../../features/quickAccess/QuickAccess";
import RecentExpenses from "../../features/recentExpenses/RecentExpenses";
import UserBalance from "../../features/userBalance/UserBalance";
import { useFetchExpensesForLastNDays } from "../../hooks/useFetchExpensesForLastNDays";
import { DashboardWrapper } from "./Dashboard.styles";

const Dashboard = () => {
  const {
    data: expensesForLast30Days,
    isLoading: is30DaysLoading,
    error: is30DaysError,
  } = useFetchExpensesForLastNDays(30);
  const {
    data: expensesForLast7Days,
    isLoading: is7DaysLoading,
    error: is7DaysError,
  } = useFetchExpensesForLastNDays(7);

  return (
    <DashboardWrapper>
      <h1>Dashboard</h1>
      <UserBalance />
      <RecentExpenses />
      <QuickAccess />
      <PieChartReport
        expenses={expensesForLast7Days}
        isLoading={is7DaysLoading}
        error={is7DaysError}
        days={7}
      />
      <PieChartReport
        expenses={expensesForLast30Days}
        isLoading={is30DaysLoading}
        error={is30DaysError}
        days={30}
      />
    </DashboardWrapper>
  );
};

export default Dashboard;
