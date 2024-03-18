import { useEffect, useState } from "react";
import Data from "../../data.json";

const HomeQuotes = () => {
  const [quotes] = useState(Data.quotes);

  const slideArr = quotes.map((quote, i) => i);

  const [slides, setSlides] = useState(slideArr);

  const rightClick = () => {
    const newSlides = slides.map((slide) => slide - 1);

    if (slides[0] === -(slides.length - 1)) {
      setSlides(slideArr);
    } else if (slides[0] > -slides.length) {
      setSlides(newSlides);
    }
    setMove(!move);
  };

  const leftClick = () => {
    const newSlides = slides.map((slide) => slide + 1);

    const slideEnd = slides.map((slide) => slide - 2);

    if (slides[0] === 0) {
      setSlides(slideEnd);
    } else if (slides[0] < slides.length) {
      setSlides(newSlides);
    }

    setMove(!move);
  };

  // Automatically change quote in 10 seconds
  const [move, setMove] = useState(true);

  useEffect(() => {
    setTimeout(rightClick, 10000);
  }, [move]);

  const leftBtn = {
    left: "6%",
    transform: "translate(-50%, -50%)",
  };

  const rightBtn = {
    right: "6%",
    transform: "translate(50%, -50%)",
  };

  const screenSize = window.innerWidth;

  return (
    <div
      // Overall Container
      style={
        screenSize >= 451
          ? screenSize <= 900
            ? {
                display: "flex",
                marginTop: "20vh",
                height: "40vh",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }
            : {
                display: "flex",
                marginTop: "20vh",
                height: "70vh",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }
          : {
              display: "flex",
              marginTop: "10vh",
              height: "50vh",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }
      }
    >
      <div
        // Slider Container
        className=" relative flex justify-center w-screen items-center h-full text-[#1E3553]"
      >
        {quotes.map((quote, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 1s",
              transform: `translateX(${100 * slides[i]}%)`,
            }}
          >
            <div
              className={
                screenSize >= 451 ? "max-w-[80%]" : "max-w-[65%]"
              }
            >
              <header
                className={
                  screenSize >= 451
                    ? screenSize <= 900
                      ? "text-[2vw]"
                      : "text-xl"
                    : "text-[3.5vw]"
                }
              >
                {quote.quote}
              </header>
              <p
                className={
                  screenSize >= 451
                    ? screenSize <= 900
                      ? "mt-2 font-light text-[1.5vw]"
                      : "mt-2 font-light"
                    : "mt-2 font-light text-[2.5vw]"
                }
              >
                -Rev Emmanuel Adedayo Oset
              </p>
            </div>
          </div>
        ))}
        <button
          onClick={leftClick}
          style={leftBtn}
          className="slideShowBtn"
        >
          &larr;
        </button>
        <button
          onClick={rightClick}
          style={rightBtn}
          className="slideShowBtn"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default HomeQuotes;
