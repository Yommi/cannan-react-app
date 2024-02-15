import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeTop from "./HomeComp/HomeTop";
import HomeService from "./HomeComp/HomeService";
import HomeLocation from "./HomeComp/HomeLocation";
import HomeQuotes from "./HomeComp/HomeQuotes";
import HomeNewHere from "./HomeComp/HomeNewHere";
import HomeGroups from "./HomeComp/HomeGroups";

const Home = ({ menuActive, setMenuActive }) => {
  const handleClick = () => {
    setMenuActive(false);
  };

  return (
    <div>
      <HomeTop menuActive={menuActive} setMenuActive={setMenuActive} />
      <div onClick={handleClick}>
        <HomeService />
        <HomeLocation />
        <HomeQuotes />
      </div>
    </div>
  );
};

export default Home;
