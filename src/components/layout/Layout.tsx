/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from "react";
import styles from "./Layout.module.css";
import Navbar from "../app-navbar/Navbar";
import Footer from "../app-footer/Footer";
import {
  ISearchModalContextType,
  SearchModalContext,
} from "../contexts/search-modal-context/SearchModalContext";
import LocationSearchModal from "../location-search-modal/LocationSearchModal";
import ErrorHandler from "../error-handler/ErrorHandler";
import { ToastHandlerContext } from "../contexts/toast-handler-context/ToastHandlerContext";

// Interfaces
interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  // Functions, states and Variables
  const { isModalOpened, setIsModalOpened }: ISearchModalContextType | any =
    useContext(SearchModalContext);
  const { errorHandlerObj }: any = useContext(ToastHandlerContext);

  return (
    <div className={styles.app_container}>
      {/* Navbar */}
      <Navbar />

      {/* App Inner Section  */}
      <div className={styles.app_container__inner}>
        {/* Modal */}
        <LocationSearchModal
          isModalOpened={isModalOpened}
          setIsModalOpened={setIsModalOpened}
        />

        {/* Error handler component */}
        <ErrorHandler
          errorHandlerObj={errorHandlerObj}
          className={"app--actions-handler-wrapper"}
        />

        {/* Main */}
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
