import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";

import "./LayoutAdmin.scss";
//import routes from "../config/routes";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <Layout>
        {/*TODO Menu sider */}
        <Layout className="layout-admin">
          <Header className="layout-admin__header">
            <MenuTop></MenuTop>
          </Header>
          <Content className="layout-admin__content">
            <LoadRoutes routes={routes}></LoadRoutes>
          </Content>
          <Footer className="layout-admin__footer">Oriol Martinez</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
//sistema de rutas
function LoadRoutes(props) {
  const { routes } = props;
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        ></Route>
      ))}
    </Switch>
  );
}
