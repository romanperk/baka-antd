import React, { useState } from "react";
import { useOrders } from "../context/ordersContext";
import { Button, Card, Typography, Row, Col, theme } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { OrdersTable } from "../components/OrdersOverview/OrdersTable";
import { EditOrderModal } from "../components/OrdersOverview/Modals/EditOrderModal";
import { ConfirmDeleteDialog } from "../components/OrdersOverview/Modals/ConfirmDeleteDialog";

const { Title } = Typography;

const OrdersOverview = () => {
  const navigate = useNavigate();
  const { orders, editOrder, completeOrder, deleteOrder } = useOrders();
  const [editingOrder, setEditingOrder] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);

  const { token } = theme.useToken();

  const handleOpenModal = () => setEditModalOpen(true);
  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setEditingOrder(null);
  };

  const handleEditExistingOrder = (order) => {
    setEditingOrder(order);
    handleOpenModal();
  };

  const handleSaveEditedOrder = () => {
    editOrder(editingOrder);
    handleCloseEditModal();
  };

  const handleCompleteOrder = (orderId) => {
    completeOrder(orderId);
  };

  const handleDeleteClick = (order) => {
    setOrderToDelete(order);
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteOrder(orderToDelete.id);
    setDeleteConfirmOpen(false);
    setOrderToDelete(null);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmOpen(false);
    setOrderToDelete(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return token.colorSuccess;
      case "processing":
        return token.colorInfo;
      case "pending":
        return token.colorWarning;
      default:
        return token.colorText;
    }
  };

  return (
    <div style={{ padding: "16px", maxWidth: "1200px", margin: "0 auto" }}>
      <Card
        style={{
          padding: 24,
          borderRadius: token.borderRadiusLG,
          background: token.colorBgContainer,
        }}
      >
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: 24 }}
        >
          <Col>
            <Title level={3}>Orders</Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => navigate("/new-order")}
            >
              Add New Order
            </Button>
          </Col>
        </Row>

        <OrdersTable
          orders={orders}
          handleEditExistingOrder={handleEditExistingOrder}
          handleCompleteOrder={handleCompleteOrder}
          getStatusColor={getStatusColor}
          handleDeleteClick={handleDeleteClick}
          formatDate={formatDate}
        />

        <EditOrderModal
          modalOpen={editModalOpen}
          handleCloseModal={handleCloseEditModal}
          editingOrder={editingOrder}
          setEditingOrder={setEditingOrder}
          handleSaveEditedOrder={handleSaveEditedOrder}
        />

        <ConfirmDeleteDialog
          modalOpen={deleteConfirmOpen}
          handleCancelDelete={handleCancelDelete}
          orderToDelete={orderToDelete}
          handleConfirmDelete={handleConfirmDelete}
        />
      </Card>
    </div>
  );
};

export default OrdersOverview;
