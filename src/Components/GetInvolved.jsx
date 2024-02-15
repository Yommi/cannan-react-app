import React from "react";
import BlueNav from "./BlueNav";
import GetInvolvedBody from "./GetInvolvedComp/GetInvolvedBody";
import { Routes, Route, Link } from "react-router-dom";
import Choir from "./GetInvolvedComp/GetInvChoir";
import { useEffect } from "react";
import GetInvMultimedia from "./GetInvolvedComp/GetInvMultimedia";
import GetInvDecoration from "./GetInvolvedComp/GetInvDecoration";

const GetInvolved = ({ menuActive, setMenuActive }) => {
  const handleClick = () => {
    setMenuActive(false);
  };

  return (
    <div>
      <BlueNav menuActive={menuActive} setMenuActive={setMenuActive} />
      <div onClick={handleClick}>
        <Routes>
          <Route path="" element={<GetInvolvedBody />} />
          <Route path="choir" element={<Choir />} />
          <Route path="multimedia" element={<GetInvMultimedia />} />
          <Route path="decoration" element={<GetInvDecoration />} />
        </Routes>
      </div>
    </div>
  );
};

export default GetInvolved;
