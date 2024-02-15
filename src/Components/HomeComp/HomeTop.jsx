import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import OGNav from "../OGNav";

const HomeTop = ({ menuActive, setMenuActive }) => {
  return (
    <div className="top">
      <OGNav menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="top-text-cont">
        <header className="welcome">
          Welcome to Canaan Ministries a.k.a Champions Church
        </header>

        <p className="welcome-p">
          God Almighty commissioned this ministry to have a part in the last
          day's move of the Holy Spirit to raise a company of champions who
          through the finished work of the Lord Jesus Christ will wreak havoc on
          the kingdom of darkness.
        </p>
      </div>
    </div>
  );
};

export default HomeTop;
