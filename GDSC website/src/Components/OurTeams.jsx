import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import upr1 from "../Assets/Images/teams-img1.png";
import lw1 from "../Assets/Images/teams-bottom-img.png";
import upr2 from "../Assets/Images/webDev-upper.png";
import lw2 from "../Assets/Images/webDev-lower.png";
import upr3 from "../Assets/Images/appDev-upper.png";
import lw3 from "../Assets/Images/appDev-lower.png";
import upr4 from "../Assets/Images/cyber-upper.png";
import lw4 from "../Assets/Images/cyber-lower.png";
import upr5 from "../Assets/Images/ai-upper.png";
import lw5 from "../Assets/Images/ai-lower.png";
import upr6 from "../Assets/Images/management-upper.png";
import lw6 from "../Assets/Images/management-lower.png";
import upr7 from "../Assets/Images/content-upper.png";
import lw7 from "../Assets/Images/content-lower.png";
import sm1 from "../Assets/Images/Polygon 1.png";
import sm2 from "../Assets/Images/Polygon 2.png";
import sm3 from "../Assets/Images/Polygon 3.png";
import sm4 from "../Assets/Images/Polygon 4.png";
import sm5 from "../Assets/Images/Polygon 5.png";
import sm6 from "../Assets/Images/Polygon 6.png";
import sm7 from "../Assets/Images/Polygon 7.png";
import arrow from "../Assets/Images/Arrow 1.png";
import profile from "../Assets/Images/Symbol.png";

function OurTeams() {
  const navigate = useNavigate();

  const teamsData = [
    {
      upperImg: upr1,
      lowerImg: lw1,
      teamName: "Design Team",
      url: "Design-Team",
      smallImg: sm1,
    },
    {
      upperImg: upr2,
      lowerImg: lw2,
      teamName: "Web Dev Team",
      url: "Web-Dev-Team",
      smallImg: sm2,
    },
    {
      upperImg: upr3,
      lowerImg: lw3,
      teamName: "App Dev Team",
      url: "App-Dev-Team",
      smallImg: sm3,
    },
    {
      upperImg: upr4,
      lowerImg: lw4,
      teamName: "Cyber Team",
      url: "Cyber-Team",
      smallImg: sm4,
    },
    {
      upperImg: upr5,
      lowerImg: lw5,
      teamName: "ML-AI Team",
      url: "ML-AI-Team",
      smallImg: sm5,
    },
    {
      upperImg: upr6,
      lowerImg: lw6,
      teamName: "Management Team",
      url: "Management-Team",
      smallImg: sm6,
    },
    {
      upperImg: upr7,
      lowerImg: lw7,
      teamName: "Content Team",
      url: "Content-Team",
      smallImg: sm7,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { innerWidth: width, innerHeight: height } = window;

  

  return (
    <div className="bg-black">
      <h1 className="text-white font-extrabold text-6xl	font-robotic text-center mt-10">
        OUR TEAMS!
      </h1>
      {width > 500 ? (
        <>
          <div className=" justify-evenly w-full mt-20 flex flex-wrap 2xl:px-20">
            {teamsData.map((e, index) => (
              <div
                key={index}
                className="relative flex justify-center mb-10 cursor-pointer"
                onClick={() => {
                  navigate(`/teams/${e.url}`);
                }}
              >
                <div className="flex justify-center h-60">
                  <img src={e.upperImg} alt="upperImage" className="" />
                </div>
                <img
                  src={e.lowerImg}
                  alt="lowerImage"
                  className="absolute bottom-0"
                />
                <div className="absolute w-full top-20 flex justify-center items-center">
                  <img src={e.smallImg} alt="smallImage" className="mt-1" />
                </div>
                <div className="absolute top-36 text-white left-8 text-2xl">
                  {e.teamName}
                </div>
                <div className="absolute top-44 left-8 text-xs text-[#FFFFFF8C] mt-1">
                  Always a new challenge. Great place to make new friends.
                </div>
                <div className="absolute bottom-0 pl-8 pr-4 my-3 flex justify-between w-full">
                  <div className="flex flex-row items-center">
                    <img src={profile} alt="profileImage" className="mr-2" />
                    <div className="text-[#867096] text-xs">50+ Members </div>
                  </div>
                  <img src={arrow} alt="arrowImage" />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className=" justify-evenly w-full mt-20 flex flex-wrap 2xl:px-20">
          <Slider {...settings} className="w-[290px]">
            {teamsData.map((e, index) => (
              <div
                key={index}
                className="relative flex justify-center mb-10 cursor-pointer"
                onClick={() => {
                  navigate(`/teams/${e.url}`);
                }}
              >
                <div className="flex justify-center h-60">
                  <img src={e.upperImg} alt="upperImage" className="" />
                </div>
                <img
                  src={e.lowerImg}
                  alt="lowerImage"
                  className="absolute bottom-0"
                />
                <div className="absolute w-full top-20 flex justify-center items-center">
                  <img src={e.smallImg} alt="smallImage" className="mt-1" />
                </div>
                <div className="absolute top-36 text-white left-8 text-2xl">
                  {e.teamName}
                </div>
                <div className="absolute top-44 left-8 text-xs text-[#FFFFFF8C] mt-1">
                  Always a new challenge. Great place to make new friends.
                </div>
                <div className="absolute bottom-0 pl-8 pr-4 my-3 flex justify-between w-full">
                  <div className="flex flex-row items-center">
                    <img src={profile} alt="profileImage" className="mr-2" />
                    <div className="text-[#867096] text-xs">50+ Members </div>
                  </div>
                  <img src={arrow} alt="arrowImage" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default OurTeams;
