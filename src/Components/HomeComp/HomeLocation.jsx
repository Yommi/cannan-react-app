import { useState } from "react";

const HomeLocation = () => {
  const [loading, setLoading] = useState(false);

  const handleIframeLoad = () => {
    setLoading(true);
  };

  const screenSize = window.innerWidth;

  return (
    <div
      style={
        screenSize >= 451
          ? {
              marginTop: "10vh",
              height: "70vh",
              display: "flex",
              justifyContent: "center",
            }
          : {
              marginTop: "10vh",
              display: "flex",
              height: "180vh",
              justifyContent: "center",
            }
      }
    >
      <div
        style={
          screenSize >= 451
            ? screenSize <= 900
              ? {
                  display: "flex",
                  width: "95%",
                  height: "100%",
                  justifyContent: "space-between",
                }
              : {
                  display: "flex",
                  width: "80%",
                  height: "100%",
                  justifyContent: "space-between",
                }
            : {
                display: "flex",
                flexDirection: "column",
                width: "90%",
                height: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }
        }
      >
        <div
          style={
            screenSize >= 451
              ? {
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40%",
                  background: "#ffffff",
                  borderRadius: " 1.39vw",
                  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                }
              : {
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "70vh",
                  background: "#ffffff",
                  borderRadius: " 2vw",
                  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
                }
          }
        >
          <header
            style={
              screenSize >= 451
                ? screenSize <= 900
                  ? {
                      width: "30%",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "3vw",
                      color: "#1e3553",
                      textAlign: "center",
                    }
                  : {
                      width: "30%",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "2vw",
                      color: "#1e3553",
                      textAlign: "center",
                    }
                : {
                    width: "30%",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "5vw",
                    color: "#1e3553",
                    textAlign: "center",
                  }
            }
          >
            Location
          </header>
          <p
            style={
              screenSize >= 451
                ? screenSize <= 900
                  ? {
                      marginTop: "2vh",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "2vw",
                      justifyContent: "center",
                      textAlign: "center",
                      color: "#1e3553",
                    }
                  : {
                      marginTop: "2vh",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "1.5vw",
                      justifyContent: "center",
                      textAlign: "center",
                      color: "#1e3553",
                    }
                : {
                    marginTop: "2vh",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "3vw",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#1e3553",
                  }
            }
          >
            Kwara State: 143 Ibrahim Taiwo Rd, 240101, Ilorin, Nigeria
          </p>
        </div>

        <div
          className={
            screenSize >= 451
              ? " relative w-[55%] flex items-center justify-center"
              : "relative w-[100%] h-[100vh] flex items-center justify-center"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.9347308209985!2d4.5873048999999995!3d8.505718600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364da14405cd75%3A0x32bec7765a042d4e!2sCanaan%20Ministries%20A.k.A%20Champions!5e0!3m2!1sen!2sng!4v1706793030576!5m2!1sen!2sng"
            className="w-full h-full border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomeLocation;
