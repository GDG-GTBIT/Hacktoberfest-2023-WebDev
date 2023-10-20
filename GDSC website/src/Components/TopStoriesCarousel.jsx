import React, {  useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import { useNavigate } from "react-router-dom";


const TopStoriesCarousel = ({Data ,extractor }) => {
const navigate=useNavigate()
const [shouldReload,setShouldReload]=useState(false)
 if (shouldReload) {
  window.location.reload();
}

 const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Data?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Data?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" h-auto w-full pt-[100px] m-auto py-16 px-4 relative flex flex-col group text-white">
      <img
        src={extractor(Data?.[currentIndex]?.Image)}
        alt="carousel"
        style={{ width: "100%" }}
      />
      <div className=" max-w-[900px] h-[auto] mx-auto left-0 right-0  bottom-0 rounded-lg">
        <div className=" m-3 Heading  text-xl sm:text-3xl md:text-5xl font-bold  text-center py-5">
          {Data?.[currentIndex]?.Title} </div>
          <div className="flex items-center justify-center relative">
        
            <p className="desc text-sm text-normal tracking-wider py-10 text-justify text-white  leading-8">
            {Data?.[currentIndex]?.Description.substr(0,500)+"..."}
            <span className='font-bold cursor-pointer' onClick={()=>{
                navigate(`/newsletter/${Data?.[currentIndex]?.ID}`);
                  setShouldReload(true);

              }}>Read More</span>
            </p>
          </div>
        
      
      </div>
      {/* Left Arrow */}
      <div className="hidden bg-black/20  font-bold group-hover:block absolute top-[200px] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={15} />
      </div>
      {/* Right Arrow */}

      <div className="hidden group-hover:block absolute top-[200px] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={15} />
      </div>
      <div className="flex text-white justify-center p-3 ">
        { Object.values(Data)?.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <div className="content-center text-white  ">
              
              <RxDotFilled color="white"  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStoriesCarousel;
