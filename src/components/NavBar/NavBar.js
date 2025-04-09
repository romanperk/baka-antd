import React, { useState } from "react";
import { Layout, Menu, Typography, Drawer, Button, Grid, theme } from "antd";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  OrderedListOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const screens = useBreakpoint();
  const { token } = theme.useToken();

  const navItems = [
    {
      key: "/",
      label: <Link to="/">Dashboard</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: "/orders",
      label: <Link to="/orders">Orders</Link>,
      icon: <OrderedListOutlined />,
    },
    {
      key: "/new-order",
      label: <Link to="/new-order">New Order</Link>,
      icon: <ShoppingCartOutlined />,
    },
  ];

  const selectedKey = location.pathname;

  const logoStyle = {
    fontWeight: 600,
    background: "linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
    fontSize: "18px",
    flexGrow: 1,
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingInline: 24,
        backgroundColor: token.colorBgContainer,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Typography.Title level={5} style={logoStyle}>
        Order Management System
      </Typography.Title>

      {!screens.md ? (
        <>
          <Button
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
            type="text"
          />
          <Drawer
            title="Navigation"
            placement="right"
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
          >
            <Menu
              mode="vertical"
              selectedKeys={[selectedKey]}
              items={navItems}
              onClick={() => setDrawerOpen(false)}
            />
          </Drawer>
        </>
      ) : (
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={navItems}
          style={{ flexGrow: 0, borderBottom: "none" }}
        />
      )}
    </Header>
  );
};

export default NavBar;
