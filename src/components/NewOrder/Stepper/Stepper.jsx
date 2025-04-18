import React from "react";
import { Steps } from "antd";

export const OrderStepper = ({ activeStep, steps, downMd }) => {
  return (
    <Steps
      current={activeStep}
      direction={"horizontal"}
      responsive={false}
      style={{ marginBottom: 32 }}
      items={steps.map((step) => ({
        title: !downMd ? step : "",
      }))}
    />
  );
};
