import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const BlueNav = ({ menuActive, setMenuActive }) => {
  const currentPath = window.location.pathname;

  let color = {
    color: "#ff69ff",
  };

  let livestream;
  let events;
  let getInvolved;

  if (currentPath === "/livestream") {
    livestream = color;
  } else if (currentPath === "/events") {
    events = color;
  } else if (currentPath === "/getInvolved") {
    getInvolved = color;
  }

  const colors = {
    navColors: {
      background: "#1E3553",
      colors: "#FFF",
    },
  };

  const screenSize = window.innerWidth;

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="NavBar-Cont">
      <div style={colors.navColors} className="NavBar">
        <div className="NavBarInner">
          <div className="left">
            <div className="imgDiv">
              <img src="/Images/cannan logo.png" alt="images" />
            </div>
            <header>Canaan Ministries</header>
            {screenSize <= 451 ? (
              <IoMdMenu onClick={handleClick} className="menuBtn" />
            ) : (
              ""
            )}
          </div>
          <nav className="navDiv">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/aboutUs">ABOUT US</Link>
              </li>
              <li>
                <Link to="/livestream" style={livestream}>
                  LIVESTREAM
                </Link>
              </li>
              <li>
                <Link to="/events" style={events}>
                  CALENDAR
                </Link>
              </li>
              <li>
                <Link to="/getInvolved" style={getInvolved}>
                  GET INVOLVED
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlueNav;
