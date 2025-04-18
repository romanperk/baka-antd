import React from "react";
import { Table, Typography, Space, Button, Tooltip, Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export const OrdersTable = ({
  downMd,
  orders,
  handleEditExistingOrder,
  getStatusColor,
  formatDate,
  handleCompleteOrder,
  handleDeleteClick,
}) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search id of a customer"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: "block" }}
            allowClear
            autoFocus
          />
          <Space>
            <Button
              onClick={() => {
                clearFilters();
                confirm({ closeDropdown: true });
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
            <Button
              onClick={() => confirm()}
              size="small"
              style={{ width: 90 }}
              type="primary"
            >
              Search
            </Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) => {
        const recordId = String(record.id || "");
        return recordId.toLowerCase().includes(value.toLowerCase());
      },
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
    },
    {
      title: "Customer",
      key: "customer",
      render: (_, record) => (
        <div>
          <Typography.Text>{record.userName}</Typography.Text>
          <br />
          <Typography.Text
            type="secondary"
            style={{ fontSize: 12, whiteSpace: "nowrap" }}
          >
            {record.userEmail}
          </Typography.Text>
        </div>
      ),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search customer"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: "block" }}
            allowClear
            autoFocus
          />
          <Space>
            <Button
              onClick={() => {
                clearFilters();
                confirm({ closeDropdown: true });
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
            <Button
              onClick={() => confirm()}
              size="small"
              style={{ width: 90 }}
              type="primary"
            >
              Search
            </Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) =>
        record.userName?.toLowerCase().includes(value.toLowerCase()) ||
        record.userEmail?.toLowerCase().includes(value.toLowerCase()),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
    },
    {
      title: "Product",
      dataIndex: "productName",
      key: "product",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Payment",
      key: "payment",
      filters: [
        { text: "Credit Card", value: "credit_card" },
        { text: "PayPal", value: "paypal" },
        { text: "Bank Transfer", value: "bank_transfer" },
      ],
      onFilter: (value, record) => record.paymentMethod.includes(value),
      render: (_, record) => record.paymentMethod.replace("_", " "),
    },
    {
      title: "Delivery",
      key: "delivery",
      filters: [
        { text: "Standard", value: "standard" },
        { text: "Express", value: "express" },
        { text: "Pickup", value: "pickup" },
      ],
      onFilter: (value, record) => record.deliveryMethod.includes(value),
      render: (_, record) => record.deliveryMethod.replace("_", " "),
    },
    {
      title: "Status",
      key: "status",
      filters: [
        { text: "Completed", value: "completed" },
        { text: "Processing", value: "processing" },
        { text: "Pending", value: "pending" },
      ],
      onFilter: (value, record) => record.status.includes(value),
      render: (_, record) => (
        <Typography.Text
          style={{ color: getStatusColor(record.status), whiteSpace: "nowrap" }}
        >
          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
        </Typography.Text>
      ),
    },
    {
      title: "Created",
      key: "createdAt",
      sorter: (a, b) => a.createdAt - b.createdAt,
      render: (_, record) => formatDate(record.createdAt),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) =>
        downMd ? (
          <Space size="small">
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => handleEditExistingOrder(record)}
            />

            {record.status !== "completed" && (
              <Button
                type="link"
                icon={<CheckCircleOutlined style={{ color: "green" }} />}
                onClick={() => handleCompleteOrder(record.id)}
              />
            )}

            <Button
              type="link"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDeleteClick(record)}
            />
          </Space>
        ) : (
          <Space size="small">
            <Tooltip title="Edit order">
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={() => handleEditExistingOrder(record)}
              />
            </Tooltip>

            {record.status !== "completed" && (
              <Tooltip title="Mark as completed">
                <Button
                  type="link"
                  icon={<CheckCircleOutlined style={{ color: "green" }} />}
                  onClick={() => handleCompleteOrder(record.id)}
                />
              </Tooltip>
            )}

            <Tooltip title="Delete order">
              <Button
                type="link"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteClick(record)}
              />
            </Tooltip>
          </Space>
        ),
    },
  ];

  return (
    <Table
      dataSource={orders}
      columns={columns}
      rowKey="id"
      scroll={{ x: 1050 }}
    />
  );
};
