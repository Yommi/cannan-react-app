import { Link } from "react-router-dom";

const WatchAudio = () => {
  return (
    <div className="vidAudioOutCont">
      <div className="vidAudioInnCont">
        <div className="vidAudioDiv">
          <Link to="/watch">
            <p>Video</p>
          </Link>
          <div className="VidAudiohiddenBar"></div>
        </div>
        <div className="vidAudioDiv">
          <p>Audio</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WatchAudio;
