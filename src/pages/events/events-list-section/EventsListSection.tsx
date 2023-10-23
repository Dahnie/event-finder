/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./EventsListSection.module.css";
import { IEvent, IEventFilterParams } from "../../../Types";
import FEPagination from "../../../components/fe-pagination/FEPagination";
import isEmpty from "../../../validation/isEmpty";
import moment from "moment";
import EventBox from "./event-box/EventBox";
import NoDataFound from "../../../components/no-data-found/NoDataFound";
import SubstituteLoadingSpinner from "../../../components/substitute-loading-spinner/SubstituteLoadingSpinner";
import { ToastHandlerContext } from "../../../components/contexts/toast-handler-context/ToastHandlerContext";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { getEventsBasedOnLocationDetails } from "../../../redux/actions/eventsActions";

// Interfaces
interface IProps {
  filterParameters: IEventFilterParams;
}

function EventsListSection({ filterParameters }: IProps) {
  // Functions, States and Variables
  const { events } = useAppSelector((state) => state.events);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { setErrorHandlerObj }: any = useContext(ToastHandlerContext);
  // URL Search parameters for lat && lng
  const queryParameters = new URLSearchParams(window.location.search);
  const latitude = queryParameters.get("lat");
  const longitude = queryParameters.get("lng");
  //   States
  const [allEvents, setAllEvents] = useState<IEvent[] | null>(null);
  const [currentEventsPosts, setCurrentEventsPosts] = useState<IEvent[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  //   Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(8);
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

  // Fetch Events
  const handleFetchEvents = function () {
    setErrorHandlerObj({ hasError: false, message: "" });
    // Call the dispatch action which calls the API to fetch events based on the query params(latitude and longitude)
    dispatch(getEventsBasedOnLocationDetails(setIsLoading, setErrorHandlerObj));
  };

  //   UseEffects
  useEffect(() => {
    // Fetch all events based on given latitude and longitude
    handleFetchEvents();
    if (!latitude && !longitude) setCurrentEventsPosts([]);
  }, [location]);

  useEffect(() => {
    if (events && latitude && longitude) handleFilterEvents();
  }, [events, filterParameters, currentPage]);

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
