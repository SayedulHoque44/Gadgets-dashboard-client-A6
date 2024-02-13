import { Layout, Menu } from "antd";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/features/Auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
const { Sider } = Layout;

const SideItems = () => {
  const dispatch = useAppDispatch();
  const items = [
    {
      key: "Gadgets Management",
      label: <NavLink to={"/dashboard"}>Gadgets Managment</NavLink>,
    },
    {
      key: "Sales Management",
      label: (
        <NavLink to={"/dashboard/SalesManagement"}>Sales Managment</NavLink>
      ),
    },
    {
      key: "Sales History",
      label: <NavLink to={"/dashboard/SalesHistory"}>Sales History</NavLink>,
    },
    {
      key: "Logout",
      label: (
        <span
          className="flex gap-2 items-center font-semibold text-red-400"
          onClick={() => dispatch(logout())}>
          LogOut
          <IoIosLogOut size={20} />
        </span>
      ),
    },
  ];
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
      }}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default SideItems;
