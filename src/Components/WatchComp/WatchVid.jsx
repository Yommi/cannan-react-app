import { Link } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";

const WatchVid = () => {
  return (
    <div className="max-w-screen">
      <div className="vidAudioOutCont">
        <div className="vidAudioInnCont">
          <div className="vidAudioDiv">
            <p>Video</p>
            <div></div>
          </div>
          <div className="vidAudioDiv">
            <Link to="/watch/audio">
              <p>Audio</p>
            </Link>
            <div className="VidAudiohiddenBar"></div>
          </div>
        </div>
      </div>
      <div className="videoCont">
        <div className="videoContInn">
          <div className="video">
            <div className="imgCont">
              <img src="/Images/image7.png" alt="img" />
            </div>
            <div className="vidInfo">
              <div className="vidInfoInn">
                <div className="vidIconsDiv">
                  <div className="sepIcons">
                    <MdRemoveRedEye className="icons" />
                    <MdOutlineFileDownload className="icons" />
                  </div>
                </div>
                <div className="vidTexts">
                  <header>LET IT SHINE</header>
                  <p>25th December</p>
                </div>
              </div>
            </div>
          </div>
          <div className="video">
            <div className="imgCont">
              <img src="/Images/image8.png" alt="img" />
            </div>
            <div className="vidInfo">
              <div className="vidInfoInn">
                <div className="vidIconsDiv">
                  <div className="sepIcons">
                    <MdRemoveRedEye className="icons" />
                    <MdOutlineFileDownload className="icons" />
                  </div>
                </div>
                <div className="vidTexts">
                  <header>HE IS KING</header>
                  <p>25th December</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" videoCont">
        <div className="videoContInn">
          <div className="video">
            <div className="imgCont">
              <img src="/Images/image7.png" alt="img" />
            </div>
            <div className="vidInfo">
              <div className="vidInfoInn">
                <div className="vidIconsDiv">
                  <div className="sepIcons">
                    <MdRemoveRedEye className="icons" />
                    <MdOutlineFileDownload className="icons" />
                  </div>
                </div>
                <div className="vidTexts">
                  <header>LET IT SHINE</header>
                  <p>25th December</p>
                </div>
              </div>
            </div>
          </div>
          <div className="video">
            <div className="imgCont">
              <img src="/Images/image8.png" alt="img" />
            </div>
            <div className="vidInfo">
              <div className="vidInfoInn">
                <div className="vidIconsDiv">
                  <div className="sepIcons">
                    <MdRemoveRedEye className="icons" />
                    <MdOutlineFileDownload className="icons" />
                  </div>
                </div>
                <div className="vidTexts">
                  <header>HE IS KING</header>
                  <p>25th December</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVid;
