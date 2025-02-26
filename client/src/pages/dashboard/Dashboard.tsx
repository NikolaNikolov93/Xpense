import MonthlyReport from "../../features/monthlyReprot/MonthlyReport";
import QuickAccess from "../../features/quickAccess/QuickAccess";
import RecentExpenses from "../../features/recentExpenses/RecentExpenses";
import UserBalance from "../../features/userBalance/UserBalance";
import { DashboardWrapper } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <h1>Dashboard</h1>
      <UserBalance />
      <RecentExpenses />
      <QuickAccess />
      <MonthlyReport />
      <MonthlyReport />
    </DashboardWrapper>
  );
};

export default Dashboard;
