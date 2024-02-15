import { Link } from "react-router-dom";
import OGNav from "../OGNav";
import HomeTop from "../HomeComp/HomeTop";

const AbtTop = ({ menuActive, setMenuActive }) => {
  return (
    <div>
      <HomeTop menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
};

export default AbtTop;
