import React from "react";

const HomeVid = () => {
  const screenSize = window.innerWidth;

  return (
    <div
      className={
        screenSize >= 451 ? "max-w-screen h-[85vh]" : ""
      }
    >
      <video
        src="/Images/Announcement.mp4"
        controls
        type="video/mp4"
        className="w-[100%] h-[100%]"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomeVid;
