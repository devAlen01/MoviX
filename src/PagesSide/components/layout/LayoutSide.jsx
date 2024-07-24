import React from "react";
import scss from "./LayoutSide.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const LayoutSide = () => {
  return (
    <div className={scss.LayoutSide}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutSide;
