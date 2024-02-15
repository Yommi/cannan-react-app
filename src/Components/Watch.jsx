import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlueNav from "./BlueNav";

import YoutubeStream from "./WatchComp/YoutubeStream";
import FacebookStream from "./WatchComp/FacebookStream";

const Watch = ({ menuActive, setMenuActive }) => {
  const handleClick = () => {
    setMenuActive(false);
  };

  return (
    <div>
      <BlueNav menuActive={menuActive} setMenuActive={setMenuActive} />
      <div onClick={handleClick}>
        <Routes>
          <Route path="" element={<YoutubeStream />} />
          <Route path="facebookstream" element={<FacebookStream />} />
        </Routes>
      </div>
    </div>
  );
};

export default Watch;
