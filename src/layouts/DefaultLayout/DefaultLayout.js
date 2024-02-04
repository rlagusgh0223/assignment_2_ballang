import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
