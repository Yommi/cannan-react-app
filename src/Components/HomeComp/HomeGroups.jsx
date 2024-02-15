const HomeGroups = () => {
  const textColor = {
    Bluecolor: { color: "#1E3553" },
  };

  const ThreeDivs = {
    width: "32%",
    height: "100%",
    backgroundColor: "#142337",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const ThreeDivsTextDivcont = {
    width: "95%",
    height: "32%",
    display: "flex",
    margin: "auto",
  };

  const ThreeDivsTextDiv = {
    marginLeft: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#FFFFFF",
  };

  const ThreeDivsheader = {
    fontWeight: "Normal",
  };

  const ThreeDivsp = {
    fontWeight: "lighter",
  };

  return (
    // The outer-most container
    <div className=" mt-12 h-screen w-full flex justify-center">
      <div className="flex flex-col justify-between w-[90%] ">
        <header style={textColor.Bluecolor} className="text-5xl ">
          Come Join Any Of Our Church Groups
        </header>
        {/*The 3 div container*/}
        <div className=" h-[80%] flex flex-row justify-between">
          <div style={ThreeDivs}>
            <img className=" h-[55%] " src="./Images/image3.jpg" alt="image" />
            <div style={ThreeDivsTextDivcont}>
              <div style={ThreeDivsTextDiv}>
                <header className="text-2xl" style={ThreeDivsheader}>
                  Mighty Men
                </header>
                <p className="text-sm" style={ThreeDivsp}>
                  Lorem ipsum dolor sit amet consectetur. Suspendisse nunc a
                  diam sed nibh sit cras. Enim ultrices tellus blandit quisque
                  quam consequat tempus. Pellentesque quisque tortor nunc turpis
                  a varius. Dolor in dictum gravida risus vitae. In euismod
                  tempus commodo vitae nisl pretium. Elementum donec ipsum est
                  vitae pretium eu. Dolor.
                </p>
              </div>
            </div>
          </div>

          <div style={ThreeDivs}>
            <img className=" h-[55%] " src="./Images/image4.jpg" alt="image" />
            <div style={ThreeDivsTextDivcont}>
              <div style={ThreeDivsTextDiv}>
                <header className="text-2xl" style={ThreeDivsheader}>
                  Love Children
                </header>
                <p className="text-sm" style={ThreeDivsp}>
                  Lorem ipsum dolor sit amet consectetur. Suspendisse nunc a
                  diam sed nibh sit cras. Enim ultrices tellus blandit quisque
                  quam consequat tempus. Pellentesque quisque tortor nunc turpis
                  a varius. Dolor in dictum gravida risus vitae. In euismod
                  tempus commodo vitae nisl pretium. Elementum donec ipsum est
                  vitae pretium eu. Dolor.
                </p>
              </div>
            </div>
          </div>

          <div style={ThreeDivs}>
            <img className=" h-[55%] " src="./Images/image5.jpg" alt="image" />
            <div style={ThreeDivsTextDivcont}>
              <div style={ThreeDivsTextDiv}>
                <header className="text-2xl" style={ThreeDivsheader}>
                  Faith Women
                </header>
                <p className="text-sm" style={ThreeDivsp}>
                  Lorem ipsum dolor sit amet consectetur. Suspendisse nunc a
                  diam sed nibh sit cras. Enim ultrices tellus blandit quisque
                  quam consequat tempus. Pellentesque quisque tortor nunc turpis
                  a varius. Dolor in dictum gravida risus vitae. In euismod
                  tempus commodo vitae nisl pretium. Elementum donec ipsum est
                  vitae pretium eu. Dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGroups;
