import React, { Fragment, useEffect, useState } from "react";
import styles from "./EventsListSection.module.css";
import { IEvent, IEventFilterParams } from "../../../Types";
import FEPagination from "../../../components/fe-pagination/FEPagination";
import isEmpty from "../../../validation/isEmpty";
import { events } from "../../../utils/dummyValues";
import moment from "moment";
import useDisplayMessage from "../../../hooks/useDisplayMessage";
import EventBox from "./event-box/EventBox";
import NoDataFound from "../../../components/no-data-found/NoDataFound";
import SubstituteLoadingSpinner from "../../../components/substitute-loading-spinner/SubstituteLoadingSpinner";

// Interfaces
interface IProps {
  filterParameters: IEventFilterParams;
}

function EventsListSection({ filterParameters }: IProps) {
  // Functions, States and Variables
  const {
    // errorHandlerObj,
    setErrorHandlerObj,
    // setErrorHandlerObj,
    // setSuccessHandlerObj,
  } = useDisplayMessage();
  //   States
  const [allEvents, setAllEvents] = useState<IEvent[] | null>(null);
  const [currentEventsPosts, setCurrentEventsPosts] = useState<IEvent[] | null>(
    null
  );
  const [isLoading] = useState(false);

  //   Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const indexOfLastPost = currentPage * rowsPerPage;
  const indexOfFirstPost = indexOfLastPost - rowsPerPage;

  // Functions
  //   Handle trigger move to next paginated page
  const handlePaginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  //   handle Filter Table
  const handleFilterEvents = function () {
    const {
      location: locationParam,
      date: dateParam,
      eventType: eventTypeParam,
    } = filterParameters;
    // Filter through the events based on the filter parameters
    const eventsData = events
      ?.filter((event: IEvent) => {
        // For Event Location
        if (!locationParam) return event;
        return event?.event_location
          ?.toLowerCase()
          .includes(locationParam.toLowerCase());
      })
      ?.filter((event: IEvent) => {
        // For Event Type
        if (!eventTypeParam) return event;
        return (
          event.event_type?.toLowerCase() === eventTypeParam?.toLowerCase()
        );
      })
      ?.filter((event: IEvent) => {
        // For Event Date
        console.log(event.event_date, moment(dateParam).format("MM/DD/YYYY"));
        if (!dateParam) return event;
        return event.event_date === moment(dateParam).format("M/D/YYYY");
      });
    // Update table state
    setAllEvents(eventsData);
    if (!eventsData) return false;
    // Slice the filtered events into pagination ranges
    const currentRows = eventsData.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentEventsPosts(currentRows);
  };

  // Fetch Admins
  const handleFetchAdmins = function () {
    setErrorHandlerObj({ hasError: false, message: "" });
    // dispatch(getAllAdmins(setIsLoading, setErrorHandlerObj));
  };

  //   UseEffects
  useEffect(() => {
    // Fetch all events based on given latitude and longitude
    handleFetchAdmins();
  }, []);

  useEffect(() => {
    if (events) handleFilterEvents();
  }, [filterParameters, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterParameters]);

  return (
    <section className={styles.events_list_section}>
      <div className={styles.events_list_container}>
        {currentEventsPosts?.map((event, index) => (
          <Fragment key={index + 1}>
            <EventBox event={event} />
          </Fragment>
        ))}
      </div>

      <div className="below_table_loader_wrapper">
        {isLoading && <SubstituteLoadingSpinner />}
      </div>

      {/* Pagination */}
      {events && !isEmpty(currentEventsPosts) && (
        <FEPagination
          paginate={handlePaginate}
          rowsPerPage={rowsPerPage}
          totalPosts={allEvents?.length || 1}
          currentPage={currentPage}
        />
      )}

      {/* No Data Found */}
      {!isLoading && currentEventsPosts && currentEventsPosts?.length < 1 && (
        <NoDataFound />
      )}
    </section>
  );
}

export default EventsListSection;
