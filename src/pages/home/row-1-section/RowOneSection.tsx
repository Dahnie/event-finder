/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./RowOneSection.module.css";
import heroImg from "../../../assets/images/hero-img-1.webp";
import PrimaryButton from "../../../components/buttons/primary-button/PrimaryButton";
import { useContext } from "react";
import {
  ISearchModalContextType,
  SearchModalContext,
} from "../../../components/contexts/search-modal-context/SearchModalContext";

function RowOneSection() {
  // Functions, States and Variables
  const { setIsModalOpened }: ISearchModalContextType | any =
    useContext(SearchModalContext);

  return (
    <section className={styles.home__row_one_section}>
      {/* Home Row Container */}
      <div className={`app--row-container ${styles.home__row_one_container}`}>
        {/* Row One Left / Introduction Text*/}
        <div className={styles.home__row_one__left}>
          <div className={styles.company_name_wrapper}>eventFindr</div>

          {/* Primary AIm Text */}
          <div className={styles.company_aim_primary_text}>
            <span>Search.</span> <span>Find.</span> <span>View</span>
          </div>

          {/* Secondary Aim Text */}
          <div className={styles.company_aim_secondary_text}>
            <p>
              Discover Exciting Events Near You! We bring you the hottest local
              events directly to your fingertips. Simply fill in a location, and
              we'll curate a personalized list of happenings in your area.
            </p>
            <p>
              From concerts and festivals to workshops and meetups, never miss
              out on what's happening around you. Join the fun today!
            </p>
          </div>

          {/* Get Started Button */}
          <PrimaryButton
            placeholder="Get Started"
            className={styles.get_started_button_wrapper}
            onClick={() => {
              setIsModalOpened(true);
            }}
          />
        </div>

        {/* Row One Right / Introduction Text*/}
        <div className={styles.home__row_one__right}>
          <div className={styles.row_image_wrapper}>
            <div className={styles.row_image_wrapper__inner}>
              <img src={heroImg} alt="a lady smiling while viewing her phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RowOneSection;
