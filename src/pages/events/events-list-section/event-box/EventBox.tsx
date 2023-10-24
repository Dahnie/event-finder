import styles from "../EventsListSection.module.css";
import moment from "moment";
import { IEvent } from "../../../../Types";
import { truncateString } from "../../../../utils/truncateString";
import locationIcon from "../../../../assets/images/svg/location-icon.svg";
import timeIcon from "../../../../assets/images/svg/time-icon.svg";
import { handleCapitalizeFirstLetter } from "../../../../utils/handleCapitalizeFirstLetter";

// Interfaces
interface IProps {
  event: IEvent;
}
function EventBox({ event }: IProps) {
  return (
    <div
      className={`${styles.event_box_wrapper} 
      }`}
    >
      <div>
        {/* Event Image */}
        <div className={styles.event_img}>
          <img src={event.event_image} alt="event-image" />
        </div>

        <div className={styles.event_type_box_wrapper}>
          {handleCapitalizeFirstLetter(event.event_type)}
        </div>

        <div className={styles.event_box__lower}>
          {/* Event Name */}
          <div className={styles.event_name}>
            {truncateString(event.event_name, 45)}
          </div>

          {/* Location */}
          <div className={styles.event_details}>
            <img src={locationIcon} alt="location-icon" />
            <span>{event.event_location}</span>
          </div>

          {/* Date and Time */}
          <div className={styles.event_details}>
            <img src={timeIcon} alt="time-icon" />
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
