import React from "react";
import logo from "./logo.svg";
import { Space, Layout, Button } from "antd";
import HeaderContent from "./layout/HeaderContent";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header>
          <HeaderContent />
        </Header>
      </Layout>

      <Layout>
        <Content></Content>
      </Layout>

      <Layout>
        <Footer></Footer>
      </Layout>
    </Space>
  );
}

export default App;
