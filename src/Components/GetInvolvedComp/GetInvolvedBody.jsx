import React from "react";
import { Link } from "react-router-dom";

const GetInvolvedBody = () => {
  const screenSize = window.innerWidth;

  return (
    <div>
      <header
        className={
          screenSize >= 451
            ? screenSize <= 900
              ? "text-[2.5vw] mx-auto flex justify-center mt-[5vh] text-[#1E3553]"
              : "text-3xl mx-auto flex justify-center mt-5 text-[#1E3553]"
            : "text-[4vw] w-[95%] mx-auto flex justify-center mt-[3vh] text-[#1E3553]"
        }
      >
        We would love to have you get involved with us by joining any of our
        teams
      </header>

      <div
        className={
          screenSize >= 451
            ? screenSize <= 900
              ? "mt-[5vh] grid grid-cols-2 gap-10 w-[95%] mx-auto "
              : "mt-16 grid grid-cols-3 gap-2 w-[95%] mx-auto "
            : "mt-[3vh] grid grid-cols-1 gap-2 w-[95%] mx-auto "
        }
      >
        <Link to="/getInvolved/choir">
          <div className="getInDivs">
            <img src="./Images/image5.jpg" alt="image" />
            <header>Choir</header>
          </div>
        </Link>
        <Link to="/getInvolved/multimedia">
          <div className="getInDivs">
            <img src="./Images/image3.jpg" alt="image" />
            <header>Multimedia Unit</header>
          </div>
        </Link>
        <Link to="/getInvolved/decoration">
          <div className="getInDivs">
            <img src="./Images/image4.jpg" alt="image" />
            <header>Decoration Unit</header>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GetInvolvedBody;
