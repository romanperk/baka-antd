import React from "react";
import { Card, Typography, Progress, Space } from "antd";
import { useNavigate } from "react-router-dom";

export const StatsDetail = ({
  icon,
  title,
  value,
  color,
  progress,
  percentage,
}) => {
  const navigate = useNavigate();
  const isClickable = title === "Total Orders";
  return (
    <Card
      variant="borderless"
      style={{
        overflow: "hidden",
        paddingTop: 16,
        paddingBottom: 8,
        cursor: isClickable && "pointer",
      }}
      styles={{ body: { paddingTop: 8 } }}
      onClick={isClickable ? () => navigate("/orders") : null}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 4,
          backgroundColor: color,
        }}
      />

      <Space style={{ marginBottom: 8, display: "flex", flexDirection: "row" }}>
        {icon}
        <Typography.Text type="secondary" style={{ fontSize: 14 }}>
          {title}
        </Typography.Text>
      </Space>

      <Typography.Title level={3} style={{ margin: "0 0 8px" }}>
        {value}
      </Typography.Title>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Progress
          percent={progress}
          size="small"
          strokeColor={color}
          showInfo={false}
          style={{ flex: 1, height: 8 }}
        />
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          {percentage}
        </Typography.Text>
      </div>
    </Card>
  );
};
