import { Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';

const OGNav = ({ menuActive, setMenuActive }) => {
  const currentPath = window.location.pathname;

  let homeColor;
  let aboutColor;

  let color = {
    color: '#ff69ff',
  };

  if (currentPath === '/aboutUs') {
    aboutColor = color;
  } else {
    homeColor = color;
  }

  const bgColor = {
    background:
      'linear-gradient( 180deg, #1e3553 -38.46%, rgba(30, 53, 83, 0) 127.56%)',
  };

  const screenSize = window.innerWidth;

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="NavBar-Cont">
      <div style={bgColor} className="NavBar">
        <div className="NavBarInner">
          <div className="left">
            <div className="imgDiv">
              <img src="/Images/cannan logo.png" alt="images" />
            </div>
            <header>Canaan Ministries</header>
            {screenSize <= 451 ? (
              <IoMdMenu
                onClick={handleClick}
                className="menuBtn"
              />
            ) : (
              ''
            )}
          </div>
          <nav className="navDiv">
            <ul>
              <li>
                <Link to="/" style={homeColor}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" style={aboutColor}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/livestream">LIVESTREAM</Link>
              </li>
              <li>
                <Link to="/events">CALENDAR</Link>
              </li>
              {/* <li>
                <Link to="/getInvolved">GET INVOLVED</Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default OGNav;
