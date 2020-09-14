import React from "react";
import "./MenuTop.scss";
import { Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import OriolLogo from "../../../assets/img/logo-white-uri.png";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={OriolLogo}
          alt="Oriol Martínez"
        ></img>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("click")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
