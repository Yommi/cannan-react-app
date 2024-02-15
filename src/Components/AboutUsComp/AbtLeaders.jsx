import React from "react";

const AbtLeaders = () => {
  const screenSize = window.innerWidth;

  return (
    <div>
      <div className="bigCont">
        <header>MEET OUR LEADERS</header>

        <div
          className={
            screenSize >= 451
              ? "flex flex-col justify-between w-[90%] mt-5 mx-auto h-[70%]"
              : "flex flex-col justify-between w-[95%] mt-[5vh] mx-auto h-[80%]"
          }
        >
          <div className="leaders">
            <p className="pstName">Rev. Emmanuel Olorundare Adedayo-Oset</p>
            <p className="pstRole">President and Senior Pastor</p>
          </div>
          <div className="leaders">
            <p className="pstName">Rev. Mrs. Grace Foluke Adedayo-Oset</p>
            <p className="pstRole">Vice President</p>
          </div>
          <div className="leaders">
            <p className="pstName">
              Pastor Kayode Ajibade -<span> Branch Pastor</span>
            </p>
            <p className="pstRole">Canaan Ministries, Lokoja</p>
          </div>
          <div className="leaders">
            <p className="pstName">
              Pastor Samuel Olorunshola -<span> Branch Pastor</span>
            </p>
            <p className="pstRole">Canaan Ministries, Unity Road, Ilorin</p>
          </div>
          <div className="leaders">
            <p className="pstName">
              Pastor Joses Korode -<span> Branch Pastor</span>
            </p>
            <p className="pstRole">Canaan Ministries, Kabba</p>
          </div>
          <p
            className={
              screenSize >= 451
                ? screenSize <= 900
                  ? "text-[2vw]"
                  : "text-xl"
                : "text-[3.8vw]"
            }
          >
            The headquarters Church and the branches each has a Board of
            Ministers headed by a chairman.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbtLeaders;
