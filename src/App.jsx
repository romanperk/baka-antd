import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, Layout, theme } from "antd";
import Dashboard from "./pages/Dashboard";
import OrdersOverview from "./pages/OrdersOverview";
import NewOrder from "./pages/NewOrder";
import NavBar from "./components/NavBar/NavBar";
import { OrderProvider } from "./context/ordersContext";

const { Content } = Layout;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <OrderProvider>
        <BrowserRouter>
          <Layout>
            <Content
              style={{
                minHeight: `100dvh`,
              }}
            >
              <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
