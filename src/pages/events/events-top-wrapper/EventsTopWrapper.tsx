import styles from "./EventsTopWrapper.module.css";
import { IEventFilterParams } from "../../../Types";
import DropdownInput from "../../../components/input-components/dropdown-input/DropdownInput";
import FilterDateInput from "../../../components/input-components/filter-date-input/FilterDateInput";
import { eventTypeOptions } from "../../../utils/dummyValues";
import PrimaryButton from "../../../components/buttons/primary-button/PrimaryButton";

// Interfaces
interface IProps {
  filterParameters: IEventFilterParams;
  setFilterParameters: React.Dispatch<React.SetStateAction<IEventFilterParams>>;
}

function EventsTopWrapper({ filterParameters, setFilterParameters }: IProps) {
  // Functions, States, Variables

  //   Functions
  //   Handles update of event filter parameter form
  const handleUpdateFilterFormInputStates = function (
    fieldName: string,
    fieldValue: string
  ) {
    const updatedFormInputStates = {
      ...filterParameters,
      [fieldName]: fieldValue,
    };
    // Update filter params form state
    setFilterParameters(updatedFormInputStates);
  };

  // Handles reset of filter parameter states to default empty
  const handleResetFilterParameters = function () {
    setFilterParameters({
      location: "",
      date: "",
      eventType: "",
    });
  };

  return (
    <section className={styles.events_top_section}>
      <div className={"page-title-wrapper"}>Events</div>

      <div className={styles.events_filter_container}>
        {/* Location form group */}
        <div className="form-group">
          <input
            type="search"
            id="location-search-input"
            name="location"
            placeholder="Location"
            value={filterParameters.location}
            onChange={(e) =>
              handleUpdateFilterFormInputStates("location", e.target.value)
            }
          />
        </div>

        {/* Event Type form group */}
        <div className="form-group dropdown-form-group">
          <DropdownInput
            id={"event-type-filter-input"}
            optionArray={[
              {
                key: "",
                value: filterParameters.eventType ? "All" : "Event Type",
                default: filterParameters.eventType ? "" : "default",
              },
              ...eventTypeOptions,
            ]}
            value={filterParameters.eventType}
            onChange={(e) =>
              handleUpdateFilterFormInputStates("eventType", e.target.value)
            }
          />
        </div>

        {/* Date form group */}
        <div className="form-group filter-date-form-group">
          <FilterDateInput
            id={"date-filter-input"}
            value={filterParameters.date}
            onChange={(e) =>
              handleUpdateFilterFormInputStates("date", e.target.value)
            }
            placeholder="Date"
          />
        </div>

        {/* Reset Filter Button */}
        <PrimaryButton
          placeholder="Reset"
          className={styles.reset_button_wrapper}
          onClick={() => handleResetFilterParameters()}
        />
      </div>
    </section>
  );
}

export default EventsTopWrapper;
