//lAYOUT

import LayoutAdmin from "../layout/LayoutAdmin";
import LayoutBasic from "../layout/LayoutBasic";

//Admin Pages

import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

//Pages

import Home from "../pages/Home";
import Contact from "../pages/Contact";

//Error 404

import Error404 from "../pages/Error404";

//Routes of Administrator panel
const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },

      {
        path: "/admin/login",
        component: AdminSignIn,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },

  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contact",
        component: Contact,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
