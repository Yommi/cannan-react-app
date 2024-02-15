import AbtTop from "./AboutUsComp/AbtTop";
import AbtVision from "./AboutUsComp/AbtSion";
import AbtLeaders from "./AboutUsComp/AbtLeaders";
import AbtFounders from "./AboutUsComp/AbtFounders";
import AbtHistory from "./AboutUsComp/AbtHistory";

const AboutUs = ({ menuActive, setMenuActive }) => {
  const handleClick = () => {
    setMenuActive(false);
  };

  return (
    <div>
      <AbtTop menuActive={menuActive} setMenuActive={setMenuActive} />
      <div onClick={handleClick}>
        <AbtVision />
        <AbtLeaders />
        <AbtFounders />
        <AbtHistory />
      </div>
    </div>
  );
};

export default AboutUs;
