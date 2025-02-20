import MonthlyReport from "../../features/monthlyReprot/MonthlyReport";
import QuickAccess from "../../features/quickAccess/QuickAccess";
import RecentExpenses from "../../features/recentExpenses/RecentExpenses";

const Dashboard = () => {
  return (
    <div>
      <RecentExpenses />
      <QuickAccess />
      <MonthlyReport />
    </div>
  );
};

export default Dashboard;
