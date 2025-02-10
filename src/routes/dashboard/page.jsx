import { useTheme } from "../../hooks/use-theme";

import { Footer } from "../../layouts/footer";

import Analytics from "../../_components/Analytics";
import BarChartData from "../../_components/BarChart";
import RecentSales from "../../_components/RecentSales";
import TopOrder from "../../_components/TopOrder";

const DashboardPage = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Dashboard</h1>

      <Analytics />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <BarChartData theme={theme} />

        <RecentSales />
      </div>
      <TopOrder />

      <Footer />
    </div>
  );
};

export default DashboardPage;
