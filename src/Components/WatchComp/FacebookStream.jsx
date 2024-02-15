import React from "react";
import { Link } from "react-router-dom";

const FacebookStream = () => {
  const screenSize = window.innerWidth;

  return (
    <div
      className={
        screenSize >= 451
          ? screenSize <= 900
            ? " mt-[5vh] h-[85vh] max-w-screen"
            : "h-[85vh] max-w-screen"
          : "h-[70vh] max-w-screen"
      }
    >
      <div
        className={
          screenSize >= 451
            ? "flex w-full h-[10%] text-[#1E3553]"
            : " mt-[5vh] flex w-full h-[10%] text-[#1E3553]"
        }
      >
        <div className="streamHeaderDivs">
          <div className="streamHeaderDivsCont">
            <Link to="/livestream">
              <header>YOUTUBE STREAM</header>
            </Link>
            <div style={{ display: "none" }} className="streamActiveLine"></div>
          </div>
        </div>
        <div className="streamHeaderDivs">
          <div className="streamHeaderDivsCont">
            <Link to="">
              <header className="">FACEBOOK STREAM</header>
            </Link>
            <div className="streamActiveLine"></div>
          </div>
        </div>
      </div>
      <div
        style={{
          aspectRatio: "16 / 9",
        }}
        className={
          screenSize >= 451
            ? screenSize <= 900
              ? " relative mx-auto w-[85%]"
              : " relative mx-auto w-[65%]"
            : " relative mt-[5vh] mx-auto w-full"
        }
      >
        <div
          className="text-2xl"
          style={{
            backgroundColor: "#E5E4E2",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: -1,
          }}
        >
          Loading...
        </div>
        <iframe
          style={{ zIndex: 0 }}
          className="relative"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ZyHjmBe8Aeo?si=Q1FjayaChbVWc4id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default FacebookStream;
