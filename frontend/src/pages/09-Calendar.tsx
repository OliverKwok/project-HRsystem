import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

// const Calendar = () => {
//   return (
//     <div>09-Calendar</div>
//   )
// }

// export default Calendar

export default class DemoApp extends React.Component {
    render() {

        

      return (
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          weekends={false}
          events={[
            { title: 'event 1', date: '2022-11-09' },
            { title: 'event 2', date: '2022-11-11' }
          ]}
          />
      )
    }
  }