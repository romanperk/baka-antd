import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, Layout, theme as antdTheme } from "antd";
import Dashboard from "./pages/Dashboard";
import OrdersOverview from "./pages/OrdersOverview";
import NewOrder from "./pages/NewOrder";
import NavBar from "./components/NavBar/NavBar";
import { OrderProvider } from "./context/ordersContext";

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: antdTheme.darkAlgorithm,
        token: {
          colorBgBase: "#121212",
          colorBgContainer: "#1e1e1e",
        },
      }}
    >
      <OrderProvider>
        <BrowserRouter>
          <Layout>
            <NavBar />
            <Content
              style={{
                marginTop: 4,
                marginBottom: 4,
              }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<OrdersOverview />} />
                <Route path="/new-order" element={<NewOrder />} />
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      </OrderProvider>
    </ConfigProvider>
  );
}

export default App;
