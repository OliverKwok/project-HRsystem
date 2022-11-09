import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

const Calendar = () => {
  const [event, setEvent] = useState([
    { title: "event 1", date: "2022-11-09" },
    { title: "event 2", date: "2022-11-11" },
    { title: "event 3", date: "2022-11-13" },
  ]);

  return (
    <>
      {/* <div>
        <input type="text" />
        <input type="text" />
      </div> */}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={event}
      />
    </>
  );
};

export default Calendar;
