import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import BlueNav from "../BlueNav";

const EveCalTop = ({ menuActive, setMenuActive }) => {
  // const image2 = "../Images/image2.jpg";

  // const bgImage = {
  //   backgroundImage: `url(${image2})`,
  //   height: "85vh",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   position: "relative",
  // };

  return (
    <div className=" max-w-screen">
      <BlueNav menuActive={menuActive} setMenuActive={setMenuActive} />

      {/*<div className="searchBarOutCont">
        <div className=" w-[20%] flex justify-between items-center ">
          <CiSearch className="text-[#FF69FF] text-xl" />
          <input type="text" placeholder="Search" />
        </div>
  </div>*/}
    </div>
  );
};

export default EveCalTop;
