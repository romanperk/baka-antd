import React from "react";
import { Form, Input } from "antd";

export const Step1 = ({ formData, handleChange }) => {
  return (
    <div style={{ minHeight: 300 }}>
      <Form.Item
        label="Name"
        name="userName"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="userEmail"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input
          name="userEmail"
          type="email"
          value={formData.userEmail}
          onChange={handleChange}
        />
      </Form.Item>
    </div>
  );
};
