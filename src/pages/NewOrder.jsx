import React, { useEffect, useState } from "react";
import NewOrderForm from "../components/NewOrder/Form/NewOrderForm";
import { Button, Card, Col, Form, Row, Typography } from "antd";
import { OrderStepper } from "../components/NewOrder/Stepper/Stepper";
import { useNavigate } from "react-router-dom";
import { useBreakpoints } from "../hooks/useBreakpoints";
import { useOrders } from "../context/ordersContext";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title } = Typography;

const NewOrder = () => {
  const navigate = useNavigate();
  const { downMd } = useBreakpoints();
  const { addOrder } = useOrders();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    productName: "",
    quantity: 1,
    paymentMethod: "",
    deliveryMethod: "",
    status: "pending",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [form] = Form.useForm();

  const steps = [
    "Personal Details",
    "Select Product",
    "Shipping & Payment",
    "Confirm Order",
  ];

  const handleNext = async () => {
    try {
      await form.validateFields();
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
      } else {
        handleSubmit();
      }
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          const newProgress = prevProgress + 5;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 100);
    }

    return () => {
      clearInterval(timer);
    };
  }, [submitted]);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => {
        setIsFormValid(true);
      })
      .catch(() => {
        setIsFormValid(false);
      });
  }, [activeStep, form, formData]);

  const handleSubmit = () => {
    const formattedData = {
      ...formData,
      paymentMethod: formData.paymentMethod.toLowerCase().replace(/ /g, "_"),
      deliveryMethod: formData.deliveryMethod.toLowerCase().replace(/ /g, "_"),
    };

    setLoadingProgress(0);
    addOrder(formattedData);
    setSubmitted(true);

    setTimeout(() => {
      navigate("/orders");
    }, 2000);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
        <Card
          style={{
            padding: 16,
          }}
        >
          <Row
            justify="space-between"
            align="middle"
            style={{ marginBottom: 24 }}
          >
            <Col>
              <Title level={3} style={{ margin: 0 }}>
                New Order
              </Title>
            </Col>
            {activeStep === 0 && (
              <Col>
                <Button
                  type="primary"
                  icon={<ArrowLeftOutlined />}
                  onClick={() => navigate("/orders")}
                >
                  {downMd ? "Overview" : "Orders Overview"}
                </Button>
              </Col>
            )}
          </Row>
          <OrderStepper activeStep={activeStep} steps={steps} downMd={downMd} />
          <NewOrderForm
            isFormValid={isFormValid}
            form={form}
            submitted={submitted}
            loadingProgress={loadingProgress}
            activeStep={activeStep}
            formData={formData}
            handleChange={handleChange}
            handleBack={handleBack}
            handleNext={handleNext}
            steps={steps}
          />
        </Card>
      </div>
    </Form>
  );
};

export default NewOrder;
