import React from "react";
import { Card, Typography, Row, Col } from "antd";

export const DashboardHeader = ({ theme }) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const gradientBackground = `linear-gradient(135deg, ${theme.colorBgContainer} 0%, ${theme.colorPrimary} 100%)`;

  return (
    <Card
      bordered={false}
      style={{
        marginBottom: 24,
        padding: 24,
        borderRadius: theme.borderRadius || 12,
        background: gradientBackground,
        color: "#fff",
      }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Typography.Title level={3} style={{ color: "#fff", margin: 0 }}>
            Dashboard Overview
          </Typography.Title>
        </Col>
        <Col>
          <Typography.Text style={{ color: "rgba(255,255,255,0.75)" }}>
            {currentDate}
          </Typography.Text>
        </Col>
      </Row>
      <Typography.Text style={{ color: "rgba(255,255,255,0.75)" }}>
        Welcome to your order management dashboard
      </Typography.Text>
    </Card>
  );
};
