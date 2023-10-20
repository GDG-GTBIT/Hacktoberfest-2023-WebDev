import React from 'react'
import { useNavigate } from 'react-router-dom';


const NewsletterpageCard  = ({Data,Image}) => {
    const navigate=useNavigate()
  return (
    <div>
   
    
    <div className=" md:py -[80] py-6 flex mx-auto flex-col md:flex-row ">
        
      <div className=" flex justify-center md:justify-start"  >
      <img className="py-2  " src={Image} alt="" srcset="" />


      </div>
      <div className="basis-[65%] px-5">
        
        
        <h2 class="text-4xl font-bold text-white py-1 flex justify-center md:justify-start ">{Data?.Title}</h2>
        <p class="text-lg font-bold text-white flex justify-center md:justify-center ">created by {Data?.Author}</p>
        <p className="text-white mb-10 py-6"> {Data?.Description.substr(0,600)+"..."}
        <span className='font-bold cursor-pointer' onClick={()=>{
                navigate(`/newsletter/${Data.ID}`);
                // window.location.reload();
              }}>Read More</span></p>
        
      </div>
  
    </div>
    
    </div>
    

  )
}

export default NewsletterpageCard
