import React from "react";
import { Row, Col } from "antd";
import { CreditCardOutlined, CarOutlined } from "@ant-design/icons";
import { CustomPieChart } from "./CustomPieChart";

const StatsCharts = ({ orderStats, theme, downMd }) => {
  const PAYMENT_COLORS = [
    theme.colorPrimary,
    theme.colorSuccess,
    theme.colorWarning,
    "#ff9f9f",
  ];

  const DELIVERY_COLORS = [
    theme.colorInfo,
    theme.colorSuccess,
    theme.colorWarning,
  ];

  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={12}>
        <CustomPieChart
          title="Payment Method Distribution"
          icon={
            <CreditCardOutlined
              style={{ fontSize: 20, color: theme.colorPrimary }}
            />
          }
          data={orderStats.paymentMethodDistribution}
          colors={PAYMENT_COLORS}
          downMd={downMd}
        />
      </Col>

      <Col xs={24} md={12}>
        <CustomPieChart
          title="Delivery Method Distribution"
          icon={
            <CarOutlined style={{ fontSize: 20, color: theme.colorPrimary }} />
          }
          data={orderStats.deliveryMethodDistribution}
          colors={DELIVERY_COLORS}
          downMd={downMd}
        />
      </Col>
    </Row>
  );
};

export default StatsCharts;
