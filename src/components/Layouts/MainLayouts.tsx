import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideItems from "./SideItems";

const { Header, Content } = Layout;

const MainLayouts = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideItems />
      <Layout>
        <Header style={{ padding: 0 }}></Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayouts;
