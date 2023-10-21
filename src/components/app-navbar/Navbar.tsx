import PrimaryButton from "../buttons/primary-button/PrimaryButton";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router";

function Navbar() {
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
            onClick={() => navigate("/events")}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
