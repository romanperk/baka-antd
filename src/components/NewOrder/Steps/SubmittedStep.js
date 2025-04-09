import React from "react";
import { Typography, Progress, Space } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

export const SubmittedStep = ({ submitted, loadingProgress }) => {
  if (!submitted) return null;

  return (
    <div
      style={{
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Space direction="vertical" align="center" size="large">
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: 60 }} />

        <Typography.Title level={4}>
          Order Submitted Successfully!
        </Typography.Title>

        <Progress
          percent={loadingProgress}
          status="active"
          showInfo={false}
          strokeColor="#52c41a"
          style={{ width: 300 }}
        />

        <Typography.Text type="secondary">
          Redirecting to order list...
        </Typography.Text>
      </Space>
    </div>
  );
};
