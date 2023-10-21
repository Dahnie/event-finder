import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "reactstrap";
import styles from "./LocationSearchModal.module.css";
import { SetStateForBoolean } from "../../Types";
import useDisplayMessage from "../../hooks/useDisplayMessage";
import cancelIcon from "../../assets/images/svg/cancel.svg";
import heroImg from "../../assets/images/location-img.webp";
import PrimaryButton from "../buttons/primary-button/PrimaryButton";

// Interfaces
interface IProps {
  isModalOpened: boolean;
  setIsModalOpened: SetStateForBoolean;
}

function LocationSearchModal({ isModalOpened, setIsModalOpened }: IProps) {
  // Functions, States and Variables
  const navigate = useNavigate();
  const {
    // errorHandlerObj,
    successHandlerObj,
    // setErrorHandlerObj,
    // setSuccessHandlerObj,
  } = useDisplayMessage();

  // States
  const [location, setLocation] = useState("");

  // Functions
  //   Handles Submits Locations
  const handleSubmitLocation = function (e: MouseEvent<HTMLButtonElement>) {
    if (location !== "") {
      e.preventDefault();

      navigate("/events");
      setIsModalOpened(false);

      //   TODO Call a function that triggers google geocoding to get user's longitude and latitude based on address

      //   TODO Which then in turn calls a 3rd party mock API to get events within that latitude and longitude
    }
  };

  return (
    <Modal
      isOpen={isModalOpened}
      toggle={() => {
        setIsModalOpened(!isModalOpened);
      }}
      centered={true}
      // backdrop="static"
      size="lg"
      className={"modal__container"}
    >
      {/* Header Wrapper  */}
      <div className="w-full">
        <button
          onClick={() => setIsModalOpened(false)}
          className={styles.cancel_button}
        >
          <img src={cancelIcon} alt="cancel-icon" />
        </button>
      </div>

      {/* Modal Body Wrapper */}
      <div className={styles.modal_boy_container}>
        {/* Left Wrapper || Hero Img */}
        <div className={styles.left_hero_img_container}>
          <img src={heroImg} alt="" />
        </div>

        {/* Right Wrapper || Form wrapper */}
        <div className={styles.form_section}>
          {/* Title */}
          {!successHandlerObj.isSuccess && (
            <>
              <p className={styles.primary_description_text}>
                Enter Your Location
              </p>

              {/* Secondary Text */}
              <p className={styles.secondary_description_text}>
                Help us find the best events near you! Simply type in your city
                or address.
              </p>
            </>
          )}

          <form>
            {/* Location Textarea */}
            <div className="form-group">
              <textarea
                id="location-input-textarea"
                name="location"
                placeholder="Enter your address"
                rows={3}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              ></textarea>
            </div>

            {/* CTA Button */}
            <PrimaryButton
              placeholder="Search"
              className={styles.cta_button_wrapper}
              onClick={(e) => handleSubmitLocation(e)}
            />
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default LocationSearchModal;
