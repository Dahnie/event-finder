import { useState } from "react";
import EventsTopWrapper from "./events-top-wrapper/EventsTopWrapper";
import { IEventFilterParams } from "../../Types";
import EventsListSection from "./events-list-section/EventsListSection";
function Events() {
  // Functions, States and Variables

  // States
  // Event Filter Parameters state
  const [filterParameters, setFilterParameters] = useState<IEventFilterParams>({
    location: "",
    date: "",
    eventType: "",
  });

  return (
    <main className="events-container app--row-container">
      {/* Events Top Section */}
      <EventsTopWrapper
        filterParameters={filterParameters}
        setFilterParameters={setFilterParameters}
      />

      {/* Events Lists section */}
      <EventsListSection filterParameters={filterParameters} />
    </main>
  );
}

export default Events;
