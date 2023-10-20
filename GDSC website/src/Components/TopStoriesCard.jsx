import React, { useEffect, useState }  from 'react'


import { useNavigate } from 'react-router-dom';
const TopStoriesCard = ({Data,Image}) => {
  const navigate=useNavigate()
 const [shouldReload,setShouldReload]=useState(false)
 if (shouldReload) {
  window.location.reload();
}

 return (
    <div>
       <div className='w-100' >
              <img className=" mb-3  "  src={Image} alt="image" />
              <h1  className=" text-left  text-[2rem] font-extrabold leading-10 tracking-normal mb-3 ">
                {Data?.Title}
              </h1>
              <p className="font-normal md:text-[1rem] text-[1rem] leading-9 tracking-wider  ">
              {Data?.Description.substr(0,180)+"..."}
              <span className='font-bold cursor-pointer' onClick={()=>{
                navigate(`/newsletter/${Data.ID}`);
                setShouldReload(true);

              }}>Read More</span>
              </p>
            </div>
    </div>
  )
}

export default TopStoriesCard
