import React, { useRef, useState } from "react";
// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import Rect1 from "../Assets/Images/rect1.png";
import Heart from "react-animated-heart";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules


const MainSlider = (prop) => {
  const [isClicked, setisClicked] = useState(false);
  return (

    <div className="flex justify-center place-items-center w-[288px] h-[400px] bg-gradient-to-b from-red-500 to-cyan-500 text-xl font-bold text-white rounded-3xl backdrop bg-black bg-opacity-80 ">
      <div className="relative text-white bg-black opacity-80 rounded-3xl h-[400px] w-[288px] sm:w-[288px] sm:h-[388px] backdrop bg-opacity-100 m-1">
        {/* <img
          src={Rect1}
          className=" absolute
bottom-0"
        /> */}

        <div
          className="absolute bottom-[75px] h-[120px] w-[280px] flex-col "
        >
          <img src={prop.data.logo} />
          <div className="flex-col">
          <div className="flex justify-center">
            <div className="relative top-9">{prop.data.projectname}</div>
            <div className="relative">
              <Heart isClick={isClicked} onClick={() => setisClicked(!isClicked)} />
            </div> 
          </div>
          <div className="text-xs line-clamp-4 relative p-[5px]">{prop.data.desc}</div> 
          </div>              
        </div>
      </div>
    </div>

  );
}
export default MainSlider;