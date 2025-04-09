import React from "react";
import { useBreakpoints } from "../hooks/useBreakpoints";
import { useGetOrderStats } from "../hooks/useGetOrderStats";
import { theme } from "antd";
import { DashboardHeader } from "../components/Dashboard/Header/Header";
import StatsSummary from "../components/Dashboard/Stats/StatsSummary";
import StatsCharts from "../components/Dashboard/Charts/StatsCharts";

const Dashboard = () => {
  const { downMd } = useBreakpoints();
  const orderStats = useGetOrderStats();
  const { token } = theme.useToken();

  return (
    <div style={{ padding: "16px", maxWidth: "1200px", margin: "0 auto" }}>
      <DashboardHeader theme={token} />
      <StatsSummary orderStats={orderStats} />
      <StatsCharts orderStats={orderStats} theme={token} downMd={downMd} />
    </div>
  );
};

export default Dashboard;
