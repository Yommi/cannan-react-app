import React from 'react';

const YoutubeStream = () => {
  const screenSize = window.innerWidth;

  return (
    <div
      className={
        screenSize >= 451
          ? screenSize <= 900
            ? ' mt-[5vh] h-[85vh] max-w-screen'
            : 'mt-[5vh] h-[85vh] max-w-screen'
          : 'h-[40vh] max-w-screen '
      }
    >
      <div
        style={{
          aspectRatio: '16 / 9',
        }}
        className={
          screenSize >= 451
            ? screenSize <= 900
              ? ' relative mx-auto w-[85%]'
              : ' relative mx-auto w-[70%]'
            : ' relative mt-[5vh] mx-auto w-full'
        }
      >
        <div
          className="text-2xl"
          style={{
            backgroundColor: '#E5E4E2',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
          src="https://www.youtube.com/embed/ev0BhWrQTOw?si=mu4UMDmVdpR8kXig"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeStream;
