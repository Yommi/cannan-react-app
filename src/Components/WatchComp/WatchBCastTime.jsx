import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const WatchBCastTime = () => {
  const pinkText = {
    color: "#FF69FF",
  };

  return (
    // Outer Cont
    <div className=" mt-16 max-w-screen h-[80vh] text-[#1E3553] ">
      {/*inner Cont*/}
      <div className="w-[90%] h-full mx-auto flex justify-between">
        {/*left Cont*/}
        <div className="w-[60%] flex flex-col justify-between ">
          <div className="h-full flex flex-col justify-between">
            <div className=" h-[40%] flex flex-col justify-between text-xl font-normal ">
              <header>
                You can also watch us on other platforms using this links:
              </header>
              <div className="flex items-center">
                <FaFacebook />
                <p>
                  Facebook :{" "}
                  <span style={pinkText}>
                    <Link to="http://facebook.com/ChampionsChurchhq">
                      ChampionsChurchhq
                    </Link>
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <FaYoutube />
                <p>
                  Youtube :{" "}
                  <span style={pinkText}>
                    <Link to="http://www.youtube.com/@championschurchhq7658">
                      Champions' Church HQ
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*right Cont*/}
        <div className=" flex bg-[#FFF] shadow-2xl w-[30%] h-full rounded-3xl ">
          <div className=" flex flex-col justify-between m-auto w-[95%] h-[80%]">
            <header className="text-4xl ">Broadcasting Times</header>
            <div className="liveTime">
              <p className="pday">Sunday Live</p>
              <p className="ptime">7:00am-9:00am</p>
              <div></div>
            </div>
            <div className="liveTime">
              <p className="pday">Sunday Live</p>
              <p className="ptime">9:30am-11:30am</p>
              <div></div>
            </div>
            <div className="liveTime">
              <p className="pday">Mid-week Live</p>
              <p className="ptime">5:30pm-8:00pm</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchBCastTime;
