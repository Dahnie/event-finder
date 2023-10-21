/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import PrimaryButton from "../buttons/primary-button/PrimaryButton";
import {
  ISearchModalContextType,
  SearchModalContext,
} from "../contexts/search-modal-context/SearchModalContext";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router";

function Navbar() {
  // Functions, States and Variables
  const { setIsModalOpened }: ISearchModalContextType | any =
    useContext(SearchModalContext);
  const navigate = useNavigate();
  return (
    <header className={`${styles.app_navbar_container}`}>
      <div className={`${styles.app_navbar_container_inner}`}>
        {/* Company Name Column / Left Column  */}
        <div className="left-col">
          <span
            className={styles.company_name_wrapper}
            onClick={() => navigate("/")}
          >
            eventFindr
          </span>
        </div>

        {/* Right Column  */}
        <div className="right-col">
          {/* Find Event Button */}
          <PrimaryButton
            placeholder="Find Events"
            className={styles.find_event_button_wrapper}
            onClick={() => setIsModalOpened(true)}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
