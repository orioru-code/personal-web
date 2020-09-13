import React from "react";
import "./MenuTop.scss";
import { Button } from "antd";
import { MenuFoldOutlined, PoweroffOutlined } from "@ant-design/icons";
import OriolLogo from "../../../assets/img/logo-white.png";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={OriolLogo}
          alt="Oriol Martínez"
        ></img>
        <Button type="link" onClick={() => console.log("Click")}>
          <MenuFoldOutlined></MenuFoldOutlined>
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("Desconexión")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
