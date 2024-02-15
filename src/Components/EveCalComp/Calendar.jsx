import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Data from "../../data.json";

const Calendar = () => {
  const [events] = useState(Data.events);

  const screenSize = window.innerWidth;

  return (
    <div>
      {/*<div className="EventsYearOutCont">
        <div className="EventsYearInnCont">
          <div className="EventsYearTextCont">
            <Link to="">
              <header>Upcoming Event</header>
            </Link>
            <div className="EventsActiveBar"></div>
          </div>
          <div className="EventsYearTextCont">
            <Link to="/events/calendar">
              <header>Year Calendar</header>
            </Link>
            <div></div>
          </div>
        </div>
      </div>*/}

      {events.map((event) => (
        <div key={event.id} className="TheEventsOutCont">
          <header className="eventMonth">{event.Month}</header>
          {event.Dates.map((date, i) => (
            <div key={i} className="TheEventsInnCont">
              <div className="TheEventsDiv">
                <header className="EventDay">{date}</header>
                <p className="EventAct">{event.Activities[i]}</p>
                <p className="EventChurch">canaan ministries</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
