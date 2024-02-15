import { Link } from "react-router-dom";

const EventsCalender = () => {
  return (
    <div className="text-[#1E3553]">
      <div className="EventsYearOutCont">
        <div className="EventsYearInnCont">
          <div className="EventsYearTextCont">
            <Link to="/events">
              <header>Upcoming Event</header>
            </Link>
            <div></div>
          </div>
          <div className="EventsYearTextCont">
            <Link to="">
              <header>Year Calendar</header>
            </Link>
            <div className="EventsActiveBar"></div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-between w-[60%] h-16 mx-auto items-center text-xl">
        <header>Weeks</header>
        <header>Events</header>
      </div>
      <div className="max-w-screen border-b-[1px] border-[#808080] pb-4">
        <div className="CalenderEventsOutCont">
          <header className="CalenderMonth">JANUARY</header>
          <div className="EachWeekEvents">
            <header>WEEK 1</header>
            <div className="EventsLine"></div>
            <div>
              <p>01-01-2023 New Year Service</p>
              <p>02-01-2023 Prayer and Fasting</p>
              <p>04-01-2023 Mid week service</p>
              <p>06-01-2023 Mid week service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCalender;
