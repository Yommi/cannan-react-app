import { Link } from "react-router-dom";
import Watch from "./Watch";

const MobileNav = ({ menuActive, setMenuActive }) => {
  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  const currentPath = window.location.pathname;

  let color = {
    color: "#ff69ff",
  };

  let home;
  let aboutUs;
  let livestream;
  let events;
  let getInvolved;

  if (currentPath === "/") {
    home = color;
  }
  if (currentPath === "/aboutUs") {
    aboutUs = color;
  }
  if (currentPath === "/livestream") {
    livestream = color;
  } else if (currentPath === "/events") {
    events = color;
  } else if (currentPath === "/getInvolved") {
    getInvolved = color;
  }

  return (
    <div
      style={{
        overflow: "hidden",
        transition: "transform 1s",
        transform: menuActive ? "translateX(0%)" : "translateX(-100%)",
      }}
      className=" flex absolute top-0 h-screen w-full z-[1] bg-[#28466E]"
    >
      <nav className="w-[60%] h-[80%] m-auto">
        <ul className="flex flex-col justify-between items-center h-full text-[5vw] text-[#FFF]">
          <li>
            <Link style={home} onClick={handleClick} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link style={aboutUs} onClick={handleClick} to="/aboutUs">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link style={livestream} onClick={handleClick} to="/livestream">
              LIVESTREAM
            </Link>
          </li>
          <li>
            <Link style={events} onClick={handleClick} to="/events">
              CALENDAR
            </Link>
          </li>
          <li>
            <Link style={getInvolved} onClick={handleClick} to="/getInvolved">
              GET INVOLVED
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
