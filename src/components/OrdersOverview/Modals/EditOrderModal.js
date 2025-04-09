import React from "react";
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Row,
  Col,
  Space,
} from "antd";

const { Option } = Select;

export const EditOrderModal = ({
  modalOpen,
  handleCloseModal,
  editingOrder,
  setEditingOrder,
  handleSaveEditedOrder,
}) => {
  if (!editingOrder) return null;

  return (
    <Modal
      title="Edit Order"
      open={modalOpen}
      onCancel={handleCloseModal}
      footer={null}
      width={600}
    >
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item label="Customer Name">
              <Input
                value={editingOrder.userName}
                onChange={(e) =>
                  setEditingOrder({
                    ...editingOrder,
                    userName: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label="Customer Email">
              <Input
                type="email"
                value={editingOrder.userEmail}
                onChange={(e) =>
                  setEditingOrder({
                    ...editingOrder,
                    userEmail: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label="Product">
              <Input value={editingOrder.productName} disabled />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label="Quantity">
              <InputNumber
                min={1}
                value={editingOrder.quantity}
                onChange={(value) =>
                  setEditingOrder({
                    ...editingOrder,
                    quantity: value,
                  })
                }
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label="Payment Method">
              <Select
                value={editingOrder.paymentMethod}
                onChange={(value) =>
                  setEditingOrder({
                    ...editingOrder,
                    paymentMethod: value,
                  })
                }
              >
                <Option value="credit_card">Credit Card</Option>
                <Option value="paypal">PayPal</Option>
                <Option value="bank_transfer">Bank Transfer</Option>
                <Option value="cash">Cash</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item label="Delivery Method">
              <Select
                value={editingOrder.deliveryMethod}
                onChange={(value) =>
                  setEditingOrder({
                    ...editingOrder,
                    deliveryMethod: value,
                  })
                }
              >
                <Option value="standard">Standard</Option>
                <Option value="express">Express</Option>
                <Option value="pickup">Pickup</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item label="Status">
              <Select
                value={editingOrder.status}
                onChange={(value) =>
                  setEditingOrder({
                    ...editingOrder,
                    status: value,
                  })
                }
              >
                <Option value="pending">Pending</Option>
                <Option value="processing">Processing</Option>
                <Option value="completed">Completed</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button type="primary" onClick={handleSaveEditedOrder}>
            Save Changes
          </Button>
        </Space>
      </Form>
    </Modal>
  );
};
