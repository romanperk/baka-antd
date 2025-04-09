import React from "react";
import { Card, Typography, Divider, Row, Col, Space } from "antd";
import { CreditCardOutlined, CarOutlined } from "@ant-design/icons";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const StatsCharts = ({ orderStats, theme, downMd }) => {
  const PAYMENT_COLORS = [
    theme.colorPrimary,
    theme.colorSuccess,
    theme.colorWarning,
    theme.colorSecondary || "#ff9f9f",
  ];
  const DELIVERY_COLORS = [
    theme.colorInfo,
    theme.colorSuccess,
    theme.colorWarning,
  ];

  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <Card
          style={{
            borderRadius: theme.borderRadiusLG,
            background: theme.colorBgContainer,
          }}
        >
          <Space align="center">
            <CreditCardOutlined
              style={{ fontSize: 20, color: theme.colorPrimary }}
            />
            <Typography.Title level={5} style={{ margin: 0 }}>
              Payment Method Distribution
            </Typography.Title>
          </Space>
          <Divider style={{ marginBottom: 12, marginTop: 20 }} />
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={orderStats.paymentMethodDistribution}
                outerRadius="60%"
                innerRadius="30%"
                labelLine={false}
                label={({ name, percent }) =>
                  downMd ? null : `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {orderStats.paymentMethodDistribution.map((_entry, index) => (
                  <Cell
                    key={`payment-cell-${index}`}
                    fill={PAYMENT_COLORS[index % PAYMENT_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              {downMd && <Legend verticalAlign="bottom" height={36} />}
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </Col>

      <Col xs={24} md={12}>
        <Card
          style={{
            borderRadius: theme.borderRadiusLG,
            background: theme.colorBgContainer,
          }}
        >
          <Space align="center">
            <CarOutlined style={{ fontSize: 20, color: theme.colorPrimary }} />
            <Typography.Title level={5} style={{ margin: 0 }}>
              Delivery Method Distribution
            </Typography.Title>
          </Space>
          <Divider style={{ marginBottom: 12, marginTop: 20 }} />
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={orderStats.deliveryMethodDistribution}
                outerRadius="60%"
                innerRadius="30%"
                labelLine={false}
                label={({ name, percent }) =>
                  downMd ? null : `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {orderStats.deliveryMethodDistribution.map((_entry, index) => (
                  <Cell
                    key={`delivery-cell-${index}`}
                    fill={DELIVERY_COLORS[index % DELIVERY_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              {downMd && <Legend verticalAlign="bottom" height={36} />}
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </Col>
    </Row>
  );
};

export default StatsCharts;
