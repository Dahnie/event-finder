import styles from "../EventsListSection.module.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { IEvent } from "../../../../Types";
import { truncateString } from "../../../../utils/truncateString";
import locationIcon from "../../../../assets/images/svg/location-icon.svg";
import timeIcon from "../../../../assets/images/svg/time-icon.svg";

// Interfaces
interface IProps {
  event: IEvent;
}
function EventBox({ event }: IProps) {
  // Functions, States and Variables
  const navigate = useNavigate();
  // Functions
  const handleNavigateToProductInfo = function (event: IEvent) {
    navigate(`/event/${event.event_id}`);
  };

  return (
    <div
      className={`${styles.event_box_wrapper} 
      }`}
    >
      <div onClick={() => handleNavigateToProductInfo(event)}>
        {/* Event Image */}
        <div className={styles.event_img}>
          <img src={event.event_image} alt="" />
        </div>

        <div className={styles.event_box__lower}>
          {/* Event Name */}
          <div className={styles.event_name}>
            {truncateString(event.event_name, 45)}
          </div>

          {/* Location */}
          <div className={styles.event_details}>
            <img src={locationIcon} alt="" />
            <span>{event.event_location}</span>
          </div>

          {/* Date and Time */}
          <div className={styles.event_details}>
            <img src={timeIcon} alt="" />
            <span>
              {moment(event.event_date, "MM/DD/YYYY").format("DD-MM-YYYY")}{" "}
            </span>{" "}
            || <span> {event.event_time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBox;
