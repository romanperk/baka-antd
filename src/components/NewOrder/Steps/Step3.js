import React from "react";
import { Form, Select } from "antd";

const { Option } = Select;

export const Step3 = ({ form, formData, handleChange }) => {
  return (
    <div style={{ minHeight: 300 }}>
      <Form.Item
        label="Payment Method"
        name="paymentMethod"
        rules={[{ required: true, message: "Please select a payment method" }]}
      >
        <Select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={(value) =>
            handleChange({ target: { name: "paymentMethod", value } })
          }
          placeholder="Select payment method"
        >
          <Option value="Credit Card">Credit Card</Option>
          <Option value="PayPal">PayPal</Option>
          <Option value="Bank Transfer">Bank Transfer</Option>
          <Option value="Cash">Cash</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Delivery Method"
        name="deliveryMethod"
        rules={[{ required: true, message: "Please select a delivery method" }]}
      >
        <Select
          name="deliveryMethod"
          value={formData.deliveryMethod}
          onChange={(value) =>
            handleChange({ target: { name: "deliveryMethod", value } })
          }
          placeholder="Select delivery method"
        >
          <Option value="Standard">Standard</Option>
          <Option value="Express">Express</Option>
          <Option value="Pickup">Pickup</Option>
        </Select>
      </Form.Item>
    </div>
  );
};
