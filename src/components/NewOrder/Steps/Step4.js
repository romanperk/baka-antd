import React from "react";
import { Card, Typography, Row, Col, Alert, theme } from "antd";

export const Step4 = ({ formData }) => {
  const { token } = theme.useToken();

  return (
    <div style={{ minHeight: 310 }}>
      <Typography.Title level={5} style={{ color: token.colorPrimary }}>
        Order Summary
      </Typography.Title>

      <Card
        style={{
          padding: 16,
          marginBottom: 16,
          backgroundColor: token.colorBgContainer,
          borderRadius: token.borderRadiusLG,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Typography.Text type="secondary" strong>
              Customer Details
            </Typography.Text>
            <div>{formData.userName}</div>
            <Typography.Text type="secondary">
              {formData.userEmail}
            </Typography.Text>
          </Col>

          <Col xs={24} md={12}>
            <Typography.Text type="secondary" strong>
              Product Details
            </Typography.Text>
            <div>{formData.productName}</div>
            <Typography.Text type="secondary">
              Quantity: {formData.quantity}
            </Typography.Text>
          </Col>

          <Col xs={24} md={12}>
            <Typography.Text type="secondary" strong>
              Payment Method
            </Typography.Text>
            <div>{formData.paymentMethod}</div>
          </Col>

          <Col xs={24} md={12}>
            <Typography.Text type="secondary" strong>
              Delivery Method
            </Typography.Text>
            <div>{formData.deliveryMethod}</div>
          </Col>
        </Row>
      </Card>

      <Alert
        message="Please review your order details before submission."
        type="info"
        showIcon
        style={{ marginBottom: 16 }}
      />
    </div>
  );
};
