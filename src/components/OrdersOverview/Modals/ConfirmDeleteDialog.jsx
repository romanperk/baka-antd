import React from "react";
import { Modal, Typography, Button } from "antd";

export const ConfirmDeleteDialog = ({
  modalOpen,
  handleCancelDelete,
  orderToDelete,
  handleConfirmDelete,
}) => {
  return (
    <Modal
      title="Delete Order"
      open={modalOpen}
      onCancel={handleCancelDelete}
      width={600}
      style={{ padding: "24px", margin: "0 auto" }}
      footer={[
        <Button key="cancel" onClick={handleCancelDelete}>
          Cancel
        </Button>,
        <Button
          key="delete"
          type="primary"
          danger
          onClick={handleConfirmDelete}
        >
          Delete
        </Button>,
      ]}
    >
      <Typography.Paragraph>
        Are you sure you want to delete{" "}
        <strong>
          order #{orderToDelete?.id} {orderToDelete?.productName}
        </strong>
        ? This action cannot be undone.
      </Typography.Paragraph>
    </Modal>
  );
};
