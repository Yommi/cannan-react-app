import { Link, Routes, Route } from "react-router-dom";
import EveCalTop from "./EveCalComp/EveCalTop";
import Calendar from "./EveCalComp/Calendar";
import EventsCalender from "./EveCalComp/EventsCalender";

const EveCal = ({ menuActive, setMenuActive }) => {
  const handleClick = () => {
    setMenuActive(false);
  };

  return (
    <div>
      <EveCalTop menuActive={menuActive} setMenuActive={setMenuActive} />
      <div onClick={handleClick}>
        <Calendar />
      </div>
    </div>
  );
};

export default EveCal;
