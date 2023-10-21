import React from "react";
import styles from "./Layout.module.css";
import Navbar from "../app-navbar/Navbar";
import Footer from "../app-footer/Footer";

// Interfaces
interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <div className={styles.app_container}>
      <Navbar />
      <div className={styles.app_container__inner}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
