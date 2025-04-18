import React from "react";
import { Button, Space } from "antd";

export const FormNavigation = ({
  isFormValid,
  handleBack,
  activeStep,
  handleNext,
  steps,
}) => {
  const isLastStep = activeStep === steps.length - 1;

  return (
    <Space
      style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      size="middle"
    >
      <Button onClick={handleBack} disabled={activeStep === 0}>
        Back
      </Button>
      <Button
        type="primary"
        color={"primary"}
        variant="solid"
        onClick={handleNext}
        disabled={!isFormValid}
      >
        {isLastStep ? "Submit Order" : "Next"}
      </Button>
    </Space>
  );
};
