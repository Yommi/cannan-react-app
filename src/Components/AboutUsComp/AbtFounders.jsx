import React from "react";

const AbtFounders = () => {
  const screenSize = window.innerWidth;

  return (
    <div>
      <div
        className={
          screenSize >= 451
            ? "bigCont"
            : "mt-[10vh] mx-auto w-full h-[180vh] bg-[#fff] text-[#1E3553]"
        }
      >
        <header
          className={screenSize >= 451 ? "" : " text-center h-[10%] text-[6vw]"}
        >
          MEET OUR FOUNDERS
        </header>
        <div
          className={
            screenSize >= 451
              ? " flex justify-between h-[90%] w-[90%] mt-6 mx-auto "
              : " flex flex-col items-center justify-between h-[90%] w-[90%] mt-6 mx-auto  "
          }
        >
          <p
            className={
              screenSize >= 451
                ? screenSize
                  ? " w-[50%] h-[90%] my-auto text-[2vw] font-normal "
                  : " w-[50%] h-[90%] my-auto text-[1.5rem] font-normal "
                : " w-[100%] my-auto text-[3vw] font-normal transform translate-y-[110vh] "
            }
          >
            REV. EMMANUEL OSET has been called to the pastoral office with a
            specific commission of tending, treating and strengthening the
            brethren and delivers those taken captives by the enemy in the
            onward march to the measure of Christ. God, having signified this to
            His servant, confirmed it through many witnesses who testified by
            open vision and prophetic utterances. This responsibility often
            manifests itself as he goes about doing good and fanning the
            kingdom’s smoking flaxes back to flames. The plan of God is to raise
            a people who will be impossible for the enemy to crack but who
            themselves will be fully His battle axes and weapons of war to
            execute His everlasting counsels on the forces of Darkness!
          </p>
          <div
            className={
              screenSize >= 451
                ? screenSize <= 900
                  ? "h-full w-[48%] flex justify-center"
                  : "h-full w-[45%] flex justify-center"
                : "h-full w-[100%] flex justify-center transform translate-y-[-50vh]"
            }
          >
            <img className="h-[90%]" src="/Images/image6.jpg" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtFounders;
