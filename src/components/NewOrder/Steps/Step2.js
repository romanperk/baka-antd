import React from "react";
import { Form, Select, InputNumber } from "antd";

const { Option } = Select;

export const Step2 = ({ formData, handleChange }) => {
  return (
    <div style={{ minHeight: 300 }}>
      <Form.Item
        label="Product"
        name="productName"
        rules={[{ required: true, message: "Please select a product" }]}
      >
        <Select
          name="productName"
          value={formData.productName}
          onChange={(value) =>
            handleChange({ target: { name: "productName", value } })
          }
          placeholder="Select a product"
        >
          <Option value="Headphones">Headphones</Option>
          <Option value="Keyboard">Keyboard</Option>
          <Option value="Smart Watch">Smart Watch</Option>
          <Option value="Speaker">Speaker</Option>
          <Option value="Mouse">Mouse</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[
          { required: true, message: "Please enter quantity" },
          {
            type: "number",
            min: 1,
            message: "Quantity must be at least 1",
          },
          {
            type: "integer",
            message: "Quantity must be a round number",
          },
        ]}
        initialValue={1}
      >
        <InputNumber
          name="quantity"
          value={formData.quantity}
          onChange={(value) =>
            handleChange({ target: { name: "quantity", value } })
          }
          style={{ width: "100%" }}
        />
      </Form.Item>
    </div>
  );
};
