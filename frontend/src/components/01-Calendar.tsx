import React, { useEffect } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";
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
            plugins={[dayGridPlugin, interactionPlugin]}
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
            // weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            // select={this.handleDateSelect} // disbale click to add
            eventContent={renderEventContent} // custom render function
            // eventClick={this.handleEventClick} // disbale click to delete
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
        <div className="calendar-info">{this.renderInfoBox()}</div>
      </div>
    );
  }

  // test

  renderInfoBox() {
    return (
      <div className="calendar-sidebar">
        <h2>All Events ({this.state.currentEvents.length})</h2>
        <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
      </div>
    );
  }

  handleDateSelect = (selectInfo: any) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  handleEventClick = (clickInfo: any) => {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove();
    // }
  };

  handleEvents = (events: any) => {
    this.setState({
      currentEvents: events,
    });
  };
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
