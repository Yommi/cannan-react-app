import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeTop from "./HomeComp/HomeTop";
import HomeService from "./HomeComp/HomeService";
import HomeLocation from "./HomeComp/HomeLocation";
import HomeQuotes from "./HomeComp/HomeQuotes";
import HomeNewHere from "./HomeComp/HomeNewHere";
import HomeGroups from "./HomeComp/HomeGroups";
import BlueNav from "./BlueNav";
import HomeVid from "./HomeComp/HomeVid";

const Home = ({ menuActive, setMenuActive }) => {
  const handleClick = () => {
    setMenuActive(false);
  };

  return (
    <div>
      <BlueNav menuActive={menuActive} setMenuActive={setMenuActive} />
      <div onClick={handleClick}>
        <HomeVid />
        <HomeService />
        <HomeLocation />
        <HomeQuotes />
      </div>
    </div>
  );
};

export default Home;
