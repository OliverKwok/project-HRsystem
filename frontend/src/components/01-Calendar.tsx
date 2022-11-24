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
  // const [weekendsVisible, setWeekendsVisible] = useState(true);
  // const [currentEvents, setCurrentEvents] = useState([]);
  const [initialEvent, setInitialEvent] = useState<state[]>([
    { id: "", title: "", start: "", backgroundColor: "", borderColor: "" },
  ]);
  // const [test, setTest] = useState("");

  useEffect(() => {
    async function checkDayShowCalendar() {
      const requestOptions = {
        method: "Get",
      };

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/user/dayShowCalendar`,
        requestOptions
      );
      const response = await res.json();

      let i = 1;
      for (let item of response) {
        let orginalBirthday = moment(item["start"]).format("YYYY-MM-DD");
        let birthdayShown =
          moment(new Date()).format("YYYY") + orginalBirthday.substring(4);

        item["id"] = i.toString();
        item["start"] = birthdayShown;
        item["title"] = "Birthday: " + item["title"];
        item["backgroundColor"] = "#0EB3B3";
        item["borderColor"] = "#0EB3B3";
        i++;
      }

      console.log(initialEvent);
      console.log(response);
      setInitialEvent(response);
    }
    async function main() {
      await checkDayShowCalendar();
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
            editable={false} // disable drag and drop
            weekends={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={initialEvent} // alternatively, use the `events` setting to fetch from a feed
            // eventContent={renderEventContent} // custom render function
          />
        </div>
        {/* <div className="calendar-info">{this.renderInfoBox()}</div> */}
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

//   renderInfoBox() {
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
//     <>
//       <div>"sss"</div>
//     </>
//   );
// }

// function renderSidebarEvent(event: any) {
//   return (
//     <li key={event.id}>
//       <b>
//         {formatDate(event.start, {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//         })}
//       </b>
//       <i> {event.title}</i>
//     </li>
//   );
// }
