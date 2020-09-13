import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Content, Footer } = Layout;
  return (
    <div>
      <Layout>
        <h2>Menu Sider Basic User</h2>
        <Layout>
          <Content>
            <LoadRoutes routes={routes}></LoadRoutes>
          </Content>
          <Footer>Oriol Martinez</Footer>
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
