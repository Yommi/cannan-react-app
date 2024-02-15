import { motion } from "framer-motion";

const HomeNewHere = () => {
  const sliderLeftUrl = `./Images/sliderLeft.jpg`;
  const sliderRightUrl = `./Images/sliderRight.jpg`;

  const sliderStyleLeft = {
    backgroundImage: `url(${sliderLeftUrl})`,
    backgroundSize: `100% 100%`,
    backgroundRepeat: `no-repeat`,
    borderRadius: `50%`,
    cursor: `pointer`,
    width: "5vw",
    height: "5vw",
  };

  const sliderStyleRight = {
    backgroundImage: `url(${sliderRightUrl})`,
    backgroundSize: `100% 100%`,
    backgroundRepeat: `no-repeat`,
    borderRadius: `50%`,
    cursor: `pointer`,
    width: "5vw",
    height: "5vw",
  };

  return (
    <div
      // Overall Container
      style={{
        fontFamily: "poppins",
        marginTop: "10vh",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        // NewHere overall container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFE1FF",
          width: "100%",
          height: "50%",
        }}
      >
        <div
          // New Here inner container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "center",
            width: "25%",
            height: "70%",
          }}
        >
          <header
            style={{
              fontSize: "2vw",
              color: "#1E3553",
            }}
          >
            New Here?
          </header>
          <p style={{ fontSize: "1vw", color: "#1E3553" }}>
            New here and you want to know more about us or even become a part of
            us please click the NEW HERE button to fill our form.
          </p>
          <motion.button
            whileHover={{
              scale: "1.1",
              cursor: "pointer",
            }}
            style={{
              width: "35%",
              height: "5vh",
              borderRadius: "15px",
              border: "1px solid #325889",
              fontSize: "1vw",
              backgroundColor: "#325889",
              color: "#FFFFFF",
              alignSelf: "center",
            }}
          >
            New Here
          </motion.button>
        </div>
      </div>
      <div
        // Cannan activities overall container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D8E1ED",
          width: "100%",
          height: "50%",
        }}
      >
        <div
          // cannan activities inner container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            height: "70%",
          }}
        >
          <motion.div
            whileHover={{
              scale: "1.1",
            }}
            style={sliderStyleLeft}
          ></motion.div>
          <div
            style={{
              width: "80%",
              height: "80%",
              backgroundColor: "#FFF",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginLeft: "2%",
                width: "25%",
                height: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <header
                style={{
                  fontSize: "1.5vw",
                  color: "#1E3553",
                }}
              >
                Canaan Activities
              </header>
              <p
                style={{
                  fontSize: "1vw",
                  color: "#1E3553",
                }}
              >
                New Year's Eve Service
              </p>
              <p
                style={{
                  fontSize: "1vw",
                  color: "#1E3553",
                }}
              >
                canaan ministries
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{
              scale: "1.1",
            }}
            style={sliderStyleRight}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeNewHere;
