import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Footer = ({ menuActive, setMenuActive }) => {
  const handleClick = () => {
    setMenuActive(false);
  };

  const colors = {
    bgBlue: {
      backgroundColor: "#28466E",
    },
    white: { color: "#FFF" },
  };

  const Icons = {
    color: "#D458D4",
    fontSize: "2rem",
  };

  const screenSize = window.innerWidth;

  return (
    // The outermost Container
    <div
      onClick={handleClick}
      style={colors.bgBlue}
      className={
        screenSize >= 451
          ? " max-w-screen mt-16 h-[35vh] rounded-lg flex"
          : " max-w-screen mt-[5vh] h-[70vh] rounded-lg flex"
      }
    >
      {/*inner Container*/}
      <div
        className={
          screenSize >= 451
            ? "m-auto h-[70%] w-[90%] flex justify-between"
            : "m-auto h-[70%] flex flex-col items-center "
        }
      >
        {/*1st Container*/}
        <div
          className={
            screenSize >= 451
              ? "w-1/4 h-[25vh] flex flex-col justify-between"
              : " h-[30vh] flex flex-col justify-between transform translate-y-[15vh]"
          }
        >
          <div
            style={colors.white}
            className={
              screenSize >= 451
                ? screenSize <= 900
                  ? "w-full text-center text-[2vw] h-[45%] flex flex-col justify-between"
                  : "w-full text-center text-2xl h-[45%] flex flex-col justify-between"
                : "text-center text-[4.2vw] flex flex-col justify-between"
            }
          >
            <p>CANAAN MINISTIRES</p>
            <p>a.k.a</p>
            <p>CHAMPIONS CHURCH</p>
          </div>
          <div className="w-full h-[40%] flex flex-col justify-between items-center font-light">
            <p
              style={colors.white}
              className={
                screenSize >= 451
                  ? screenSize <= 900
                    ? "text-[1.8vw]"
                    : ""
                  : "text-[3.5vw]"
              }
            >
              09055321767
            </p>
            <div
              className={
                screenSize >= 451
                  ? screenSize <= 900
                    ? "flex justify-between w-[100%] text-[#D458D4] text-[3vw]"
                    : "flex justify-between w-[60%] text-[#D458D4] text-[2rem]"
                  : "flex justify-between w-[100%] text-[6vw] text-[#D458D4]"
              }
            >
              <Link to="https://instagram.com/Championsofcanaan">
                <FaInstagram className="socialLinks" />
              </Link>
              <Link to="https://www.youtube.com/@championschurchhq7658">
                <FaYoutube className="socialLinks" />
              </Link>
              <Link to="https://twitter.com/championschurchhq">
                <FaXTwitter className="socialLinks" />
              </Link>
              <Link to="https://facebook.com/ChampionsChurchhq">
                <FaFacebook className="socialLinks" />
              </Link>
            </div>
          </div>
        </div>
        {/*2nd Container*/}
        <div
          style={colors.white}
          className={
            screenSize >= 451
              ? screenSize <= 900
                ? " flex flex-col justify-between h-[40%] w-[55%] text-[1.5vw] font-light"
                : " flex flex-col justify-between h-[40%] w-[40%] text-sm font-light"
              : " w-screen flex flex-col justify-between h-[10vh] text-[3.2vw] transform translate-y-[-30vh]"
          }
        >
          <nav className="footNav">
            <ul className="flex justify-between w-full">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/aboutUs">ABOUT US</Link>
              </li>
              <li>
                <Link to="/livestream">LIVESTREAM</Link>
              </li>
              <li>
                <Link to="/events">CALENDAR</Link>
              </li>
              <li>
                <Link to="/getInvolved">GET INVOLVED</Link>
              </li>
            </ul>
          </nav>
          <p className="text-center ">
            Kwara State: 143 Ibrahim Taiwo Rd, 240101, Ilorin, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
