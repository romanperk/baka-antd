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
      variant="borderless"
      style={{
        marginBottom: 24,
        padding: 24,
        background: gradientBackground,
      }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Typography.Title level={3} style={{ margin: 0 }}>
            Dashboard Overview
          </Typography.Title>
        </Col>
        <Col>
          <Typography.Text>{currentDate}</Typography.Text>
        </Col>
      </Row>
      <Typography.Text>
        Welcome to your order management dashboard
      </Typography.Text>
    </Card>
  );
};
