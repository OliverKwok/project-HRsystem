import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { INITIAL_EVENTS, createEventId } from "./01-eventSetting";

export default class Calendar extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  render() {
    return (
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
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            eventContent={renderEventContent} // custom render function
          />
        </div>
        <div className="calendar-info">{this.renderInfoBox()}</div>
      </div>
    );
  }

  renderInfoBox() {
    return (
      <div className="calendar-sidebar">
        <h2>All Events ({this.state.currentEvents.length})</h2>
        <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
      </div>
    );
  }
}

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

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
