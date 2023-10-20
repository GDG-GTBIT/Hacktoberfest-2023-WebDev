import React from 'react'
import HomeSwiper from './Swiper'
import icon from "../Assets/Images/iconRight.png"

export default function ProjectPage() {
  return (
    <div className='grid grid-cols-1 m-10 lg:grid-cols-3 md:mx-28 h-max items-center md:w-9/12 mb-10 '>
      <div className='flex-col  lg:col-span-2 justify-evenly'>
        <div className='text-white text-[35px] lg:text-[44px] leading-10 md:text-[38px] sm:text-[20px] font-bold flex flex-wrap'>
          <p>
            We create<br />
            PROJECTS with a BIG teaspoon<br />
            of PASSION<br />
            and DEDICATION,<br />
            GARNISHED with a dash <br />of CREATIVITY
          </p>

        </div>
        <div className=' lg:text-[20px] md:text-[18px] sm:text-[14px] text-white sm:w-[300px] lg:w-[600px] h-[125px] mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
      </div>
      <div className='grid justify-center items-center '>
        <div className='text-white mb-3'><HomeSwiper /></div>
        <div className='w-[220px] h-[60px] rounded-2xl border-white border-2 flex justify-center  place-items-center m-8'>
          <p class=" text-xl font-medium  text-white">view project</p>
          <img src={icon} alt="Right-Icon" className='pl-3'></img>
        </div>
      </div>
    </div>
  )
}
