import { Layout } from "antd";
import { IoMdCart } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import { useShowCart } from "../../redux/features/Cart/CartSlice";
import { useAppSelector } from "../../redux/hooks";
import SideItems from "./SideItems";

const { Header, Content } = Layout;

const MainLayouts = () => {
  const CartItems = useAppSelector(useShowCart);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideItems />
      <Layout>
        <Header className="flex items-center  h-auto w-full p-2">
          {CartItems.length > 0 && (
            <Link
              to={`Checkout`}
              className="text-white rounded bg-yellow-600 shadow-sm font-semibold flex items-center px-2 py-1 gap-2 text-xl">
              <IoMdCart />
              <span>({CartItems.length})</span>
            </Link>
          )}
        </Header>
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
