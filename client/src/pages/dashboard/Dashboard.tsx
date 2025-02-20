import MonthlyReport from "../../features/monthlyReprot/MonthlyReport";
import QuickAccess from "../../features/quickAccess/QuickAccess";
import RecentExpenses from "../../features/recentExpenses/RecentExpenses";
import { DashboardWrapper } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <h1>Dashboard</h1>
      <RecentExpenses />
      <QuickAccess />
      <MonthlyReport />
    </DashboardWrapper>
  );
};

export default Dashboard;
