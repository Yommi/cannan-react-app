import React from "react";

const AbtSion = () => {
  const colors = {
    sionColors: {
      backgroundColor: "#FFF",
      color: "#1E3553",
    },
  };

  return (
    <div>
      <div style={colors.sionColors} className="sionCont">
        <div>
          <header>OUR VISION</header>

          <p>
            God Almighty commissioned this ministry to have a part in the last
            day’s move of the Holy Spirit to raise a company of champions who
            through the finished work of the Lord Jesus Christ will wreak havoc
            on the kingdom of darkness. Implicit in that is the burden to tend,
            treat and strengthen God’s people.
          </p>
        </div>
      </div>

      <div style={colors.sionColors} className="sionCont">
        <div>
          <header>OUR MISSION</header>

          <p>
            God Almighty commissioned this ministry to have a part in the last
            day’s move of the Holy Spirit to raise a company of champions who
            through the finished work of the Lord Jesus Christ will wreak havoc
            on the kingdom of darkness. Implicit in that is the burden to tend,
            treat and strengthen God’s people and deliver those taken captive by
            the enemy in the onward march to the fullness of the measure of the
            stature of Christ
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbtSion;
