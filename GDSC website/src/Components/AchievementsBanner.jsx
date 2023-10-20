import React from 'react'

function AchievementsBanner() {
  return (
    <div className='text-white mb-20 flex flex-col items-center justify-center'>
      <h1 className='text-[30px] text-center md:text-[48px] font-medium text-white mb-10 mx-36'>Happiness Lies in the joy of achievement and thrill of creative effort</h1>
      <div className='flex justify-center md:justify-between max-w-[80%] xl:gap-x-96 lg:gap-x-72 md:gap-x-32 gap-y-24 items-center flex-wrap'>
        <span className='xl:w-[400px] lg:w-[350px] md:w-[300px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <button className='justify-items-center border-2 border-white px-3 py-5 rounded-2xl shadow-[0px_0px_20px_3px_rgba(0,0,0,0.3)] shadow-white hover:shadow-white hover:shadow-[0px_0px_35px_5px_rgba(0,0,0,0.3)] hover:bg-white hover:text-black'>
          View Our Achievements
        </button>
      </div>
    </div>
  )
}

export default AchievementsBanner