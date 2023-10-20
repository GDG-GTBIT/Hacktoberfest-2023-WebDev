import React from "react";
import Avatar from "../Assets/Images/memberAvatar.png"
import GDSCLogo from "../Assets/Images/gdscLogo.png" 
const TeamMemberCard = ({data}) => {
  function extractor(url_id) {
    if (url_id) {
      if (url_id.search("google.com") !== -1) {
        var id = url_id.split("="); 
        var url_link = "https://drive.google.com/uc?export=view&id=";
        var url = url_link.concat(id[1]);
      } else {
        url = url_id;
      }

      return url;
    } else
      return "https://drive.google.com/thumbnail?id=1mz35ArVCMbBHQTXebpm2OWFoTvTMrkXA";
  }
  return (
    
    <>
      <div className=" m-2 p-0.5 flex justify-center items-center md:w-auto teamMemberCardWrapper rounded-[10px] bg-gradient-to-b from-red-600  to-blue-400">
        <div className=" mx-0.5 w-full bg-black rounded-[10px] flex flex-row justify-center items-center">
            <div className="avatarWrapper w-1/2 mx-auto my-0">
                <img src={extractor(data?.Photo)} className="w-[110px] h-[110px] mx-auto my-0 p-3  rounded-[30px]" alt="photo"/>
            </div>
            <div className="teamMemberCardContent w-96 h-auto bg-white bg-opacity-[0.04] rounded-l-[30px] text-white p-2 pl-6 flex flex-col justify-between">
                <div className="flex flex-col ">
                    <div className="teamMemberCardName p-1 text-base font-roboto">
                        {data?.Name}
                    </div>
                    <div className="teamMemberCardDescription font-lato h-[72px] text-white opacity-50">
                        {data?.Description.substring(0,60) + '...'}
                    </div>
                </div>
                <div className="flex items-center justify-start">
                    <img src={GDSCLogo} className="max-w-[65px] py-1  rounded-[30px]"/>
                    <div className="text-white hover:underline cursor-pointer ml-5">
                        View More
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;