import React from "react";

const AbtHistory = () => {
  const screenSize = window.innerWidth;

  return (
    <div>
      <div className="bigCont">
        <header>OUR HISTORY</header>

        <p
          className={
            screenSize >= 451
              ? screenSize <= 900
                ? " w-[90%] mx-auto text-[2vw] font-normal "
                : " w-[90%] mt-6 mx-auto text-[1.3rem] font-normal "
              : " w-[90%] mx-auto text-[3vw] font-normal "
          }
        >
          God Almighty commissioned this ministry to have a part in the last
          day’s move of the Holy Spirit to raise a company of champions who
          through the finished work of the Lord Jesus Christ will wreak havoc on
          the kingdom of darkness. Implicit in that is the burden to tend, treat
          and strengthen God’s people and deliver those taken captive by the
          enemy in the onward march to the fullness of the measure of the
          stature of Christ (Eph. 4:11-13). There is of course the burden for
          the lost. Like all of God’s people, our congregations are to be
          mobilized and galvanized into aggressive but agape-directed
          evangelism. <br /> Thirdly, Canaan Ministries carries a special burden
          for the maturing of the saints. We know that the Lord having delivered
          His people from Egypt destined them for the fullness of the Promised
          Land. Therefore we share this burden of the Lord to build God’s saints
          to the place where they can fully represent the Lord here on earth in
          character and charisma. Another emphasis in the commission that the
          Lord has established in Canaan is the provision of a regular
          rendezvous where ministers from diverse backgrounds and calling can
          come together to be encouraged, nurtured and re-fired to be
          increasingly fruitful and faithful unto the Lord. Our Ministers’
          Conference is one of the devices for achieving this purpose. The Lord
          has confirmed this burden by bringing a host of ministers who have
          asked to relate to the Lord’s servant as a stimulus to their
          fulfilling God’s call on their lives.
        </p>
      </div>
    </div>
  );
};

export default AbtHistory;
