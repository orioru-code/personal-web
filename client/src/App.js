import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubs key={index} {...route}></RouteWithSubs>
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubs(route) {
  //funcion de sistema de rutas que coge de routes, donde se ha configurado un componente segun el path
  console.log(route);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        <route.component routes={route.routes} {...props}></route.component>
      )}
    ></Route>
  );
}

export default App;
