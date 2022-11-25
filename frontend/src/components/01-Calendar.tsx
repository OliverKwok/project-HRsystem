import React, { useState, useEffect } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import { INITIAL_EVENTS, createEventId } from "./01-eventSetting";

import moment from "moment";
moment().format();

interface state {
  id: string;
  title: string;
  start: string;
  backgroundColor: string;
  borderColor: string;
}
export default function Calendar() {
  const [initialEvent, setInitialEvent] = useState<state[]>([
    { id: "", title: "", start: "", backgroundColor: "", borderColor: "" },
  ]);

  useEffect(() => {
    async function checkBirthdayShowCalendar() {
      const requestOptions = {
        method: "Get",
      };

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/user/birthdayShowCalendar`,
        requestOptions
      );
      const response = await res.json();

      let i = 1;
      for (let item of response) {
        item["id"] = "birthday" + i.toString();
        item["start"] = changeBirthdayDateFormat(item["start"]);
        item["title"] = "Birthday: " + item["title"];
        item["backgroundColor"] = "#0EB3B3";
        item["borderColor"] = "#0EB3B3";
        i++;
      }
      return response;
      // setInitialEvent(response);
    }
    async function checkLeaveShowCalendar() {
      const requestOptions = {
        method: "Get",
      };

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/user/leaveShowCalendar`,
        requestOptions
      );
      const response = await res.json();

      let i = 1;
      for (let item of response) {
        if (
          // full day one day
          item["start"] == item["end"] &&
          item["start_date_period"] == "full_day" &&
          item["end_date_period"] == "full_day"
        ) {
          item["start"] = item["start"];
          item["end"] = item["end"];
        } else if (
          // full day more than one day
          item["start"] != item["end"] &&
          item["start_date_period"] == "full_day" &&
          item["end_date_period"] == "full_day"
        ) {
          item["start"] = item["start"];
          item["end"] = item["end"] + "T23:00:00";
        } else if (
          // one morning
          item["start"] == item["end"] &&
          item["start_date_period"] == "first_half" &&
          item["end_date_period"] == "first_half"
        ) {
          item["start"] = item["start"] + "T09:00:00";
          item["end"] = item["end"] + "T14:00:00";
        } else if (
          // one afternoon
          item["start"] == item["end"] &&
          item["start_date_period"] == "second_half" &&
          item["end_date_period"] == "second_half"
        ) {
          item["start"] = item["start"] + "T14:00:00";
          item["end"] = item["end"] + "T18:00:00";
        } else if (
          // more than one day with afternoon start
          item["start"] != item["end"] &&
          item["start_date_period"] == "second_half" &&
          item["end_date_period"] == "full_day"
        ) {
          item["start"] = item["start"] + "T14:00:00";
          item["end"] = item["end"] + "T23:00:00";
        } else if (
          // more than one day with morning end
          item["start"] != item["end"] &&
          item["start_date_period"] == "full_day" &&
          item["end_date_period"] == "first_half"
        ) {
          item["start"] = item["start"] + "T09:00:00";
          item["end"] = item["end"] + "T14:00:00";
          // specified for half day end
          item["title"] = item["title"] + " (2pm end)";
        }

        item["id"] = "leave" + i.toString();
        item["title"] = item["type"] + ": " + item["title"];
        item["backgroundColor"] = "#42adf5";
        item["borderColor"] = "#42adf5";
        i++;
      }
      // console.log(response);
      return response;
    }

    function changeBirthdayDateFormat(date: string) {
      return moment(new Date()).format("YYYY") + date.substring(4);
    }
    // function changeDateFormat(date: string) {
    //   return moment(date).format("YYYY-MM-DD");
    // }
    async function main() {
      let array1 = await checkBirthdayShowCalendar();
      let array2 = await checkLeaveShowCalendar();
      let show = [...array1, ...array2];
      setInitialEvent(show);
    }
    main();
  }, []);

  return (
    <>
      <div className="calendar-container">
        <div className="calendar-main">
          <FullCalendar
            plugins={[dayGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth",
            }}
            initialView="dayGridMonth"
            nextDayThreshold="09:00:00"
            editable={false} // disable drag and drop
            weekends={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={initialEvent} // alternatively, use the `events` setting to fetch from a feed
            // eventContent={renderEventContent} // custom render function
          />
          {/* <div className="calendar-info">{renderInfoBox}</div> */}
        </div>
        <div className="calendar-info">
          <div className="calendar-sidebar">
            <h2>All Events ({initialEvent.length})</h2>
            <ul>{initialEvent.map(renderSidebarEvent)}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

// export class Calendar2 extends React.Component {
//   state = {
//     weekendsVisible: true,
//     currentEvents: [],
//   };

//   render() {
//     return (
//       <div className="calendar-container">
//         <div className="calendar-main">
//           <FullCalendar
//             plugins={[dayGridPlugin]}
//             headerToolbar={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth",
//             }}
//             initialView="dayGridMonth"
//             editable={false} // disable drag and drop
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//             eventContent={renderEventContent} // custom render function
//           />
//         </div>
//         <div className="calendar-info">{this.renderInfoBox()}</div>
//       </div>
//     );
//   }

//   function renderInfoBox() {
//     return (
//       <div className="calendar-sidebar">
//         <h2>All Events ({this.state.currentEvents.length})</h2>
//         <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
//       </div>
//     );
//   }
// }

// function renderEventContent(eventInfo: any) {
//   return (
//   <>
//   <b>{eventInfo.timeText}</b>
//   <i>{eventInfo.event.title}</i>
// </>
//   );
// }

function renderSidebarEvent(event: any) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i> {event.title}</i>
    </li>
  );
}
