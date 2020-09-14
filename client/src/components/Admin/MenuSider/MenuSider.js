import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";

import "./MenuSider.scss";

export default function MenuSider(props) {
  const { Sider } = Layout;
  const { menuCollapsed } = props;
  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item className="admin-sider__item" key="1">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item className="admin-sider__item" key="2">
          <Link to={"/admin/menu-web"}>
            <MenuOutlined />
            <span className="nav-text">Menú</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
