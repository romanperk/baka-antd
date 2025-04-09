import React from "react";
import { Row, Col } from "antd";
import {
  CheckCircleOutlined,
  SyncOutlined,
  HourglassOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { StatsDetail } from "./StatsDetail";

const StatsSummary = ({ orderStats }) => {
  const statsCards = [
    {
      icon: <ShoppingOutlined style={{ color: "#1677ff", fontSize: 24 }} />,
      title: "Total Orders",
      value: orderStats.totalOrders,
      color: "#1677ff",
      progress: 100,
      percentage: "100%",
    },
    {
      icon: <CheckCircleOutlined style={{ color: "#52c41a", fontSize: 24 }} />,
      title: "Completed",
      value: orderStats.completedOrders,
      color: "#52c41a",
      progress: orderStats.completionRate,
      percentage: `${orderStats.completionRate}%`,
    },
    {
      icon: <SyncOutlined style={{ color: "#13c2c2", fontSize: 24 }} />,
      title: "Processing",
      value: orderStats.processingOrders,
      color: "#13c2c2",
      progress:
        orderStats.totalOrders > 0
          ? (orderStats.processingOrders / orderStats.totalOrders) * 100
          : 0,
      percentage:
        orderStats.totalOrders > 0
          ? `${Math.round(
              (orderStats.processingOrders / orderStats.totalOrders) * 100
            )}%`
          : "0%",
    },
    {
      icon: <HourglassOutlined style={{ color: "#faad14", fontSize: 24 }} />,
      title: "Pending",
      value: orderStats.pendingOrders,
      color: "#faad14",
      progress:
        orderStats.totalOrders > 0
          ? (orderStats.pendingOrders / orderStats.totalOrders) * 100
          : 0,
      percentage:
        orderStats.totalOrders > 0
          ? `${Math.round(
              (orderStats.pendingOrders / orderStats.totalOrders) * 100
            )}%`
          : "0%",
    },
  ];

  return (
    <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
      {statsCards.map((card, index) => (
        <Col xs={24} sm={12} md={6} key={index}>
          <StatsDetail
            icon={card.icon}
            title={card.title}
            value={card.value}
            color={card.color}
            progress={card.progress}
            percentage={card.percentage}
          />
        </Col>
      ))}
    </Row>
  );
};

export default StatsSummary;
