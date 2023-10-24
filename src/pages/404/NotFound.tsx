import React from "react";
import styles from "./NotFound.module.css";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import { useNavigate } from "react-router";

function NotFound() {
  // Functions, States and Variables
  const navigate = useNavigate();
  return (
    <section className={`${styles.not_found_section}`}>
      <div className={`app--row-container ${styles.not_found_container}`}>
        <div className={styles["text_404_wrapper"]}>
          <span>4</span>
          <span>😶</span>
          <span>4</span>
        </div>

        <div className={styles.not_found_primary_text}>
          <span>
            Hey, seems like you got <span>lost.</span>
            <span> No worries!</span>
          </span>
        </div>

        {/* Go Home Button */}
        <PrimaryButton
          placeholder="Go Home"
          className={styles.go_home_button_wrapper}
          onClick={() => navigate("/")}
        />
      </div>
    </section>
  );
}

export default NotFound;
