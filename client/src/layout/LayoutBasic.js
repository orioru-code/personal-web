import React from "react";
import { Header, Sidebar, Content, Layout, Footer } from "antd";

export default function LayoutBasic() {
  return (
    <div>
      <Layout>
        <h2>Menu Sidebar</h2>
        <div>Contenido...</div>
        <h5>Footer</h5>
      </Layout>
    </div>
  );
}
