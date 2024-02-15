import React from "react";

const HomeService = () => {
  const screenSize = window.innerWidth;

  return (
    <div
      style={
        screenSize >= 451
          ? {
              display: "flex",
              marginTop: "5%",
              justifyContent: "center",
              height: "40vh",
            }
          : {
              display: "flex",
              marginTop: "10%",
              height: "100vh",
              justifyContent: "center",
            }
      }
    >
      <div
        style={
          screenSize >= 451
            ? screenSize <= 900
              ? {
                  backgroundColor: "#fff",
                  boxShadow: "0px 10px 20px 0px rgba(131, 131, 131, 0.25)",
                  width: "95%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "0 2vw 0 2vw",
                  borderRadius: "10px",
                }
              : {
                  backgroundColor: "#fff",
                  boxShadow: "0px 10px 20px 0px rgba(131, 131, 131, 0.25)",
                  width: "80%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "0 2vw 0 2vw",
                  borderRadius: "10px",
                }
            : {
                backgroundColor: "#fff",
                boxShadow: "0px 10px 20px 0px rgba(131, 131, 131, 0.25)",
                width: "90%",
                height: "100%",
                borderRadius: "10px",
              }
        }
      >
        <div
          style={
            screenSize >= 451
              ? {
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "20%",
                }
              : {
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "15vh",
                }
          }
        >
          <header
            style={
              screenSize >= 451
                ? screenSize <= 900
                  ? {
                      fontFamily: "Poppins",
                      fontSize: "2.5vw",
                      color: "#1E3553",
                      fontWeight: "500",
                    }
                  : {
                      fontFamily: "Poppins",
                      fontSize: "1.8vw",
                      color: "#1E3553",
                      fontWeight: "500",
                    }
                : {
                    fontFamily: "Poppins",
                    fontSize: "5.5vw",
                    color: "#1E3553",
                    fontWeight: "600",
                  }
            }
          >
            SERVICE TIME
          </header>
        </div>
        <div
          style={
            screenSize >= 451
              ? screenSize <= 900
                ? {
                    display: "flex",
                    justifyContent: "space-between",
                    height: "50%",
                  }
                : {
                    display: "flex",
                    justifyContent: "space-between",
                    height: "70%",
                  }
              : {
                  marginTop: "10%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "50%",
                }
          }
        >
          <div className="servicetimedivs">
            <header className="servicetimehead">WEEKLY SERVICE</header>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "10vh",
              }}
            >
              <p className="servicetimep">
                Wednesday anointed teaching of the word *5:30pm
              </p>
              <p className="servicetimep">Friday victory prayer hour *5:30pm</p>
            </div>
          </div>

          <div className="servicetimedivs">
            <header className="servicetimehead">WEEKEND SERVICE</header>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "10vh",
              }}
            >
              <p className="servicetimep">Sunday school *7:30am</p>
              <p className="servicetimep">Sunday service *8:00am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
