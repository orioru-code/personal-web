//lAYOUT

import LayoutAdmin from "../layout/LayoutAdmin";

//Admin Pages

import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

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
    ],
  },
];

export default routes;
