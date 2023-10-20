import React from "react";
import newsletter1 from "../Assets/Images/NewsletterBgStripes.png";
import { useNavigate } from "react-router-dom";

function Newsletter() {
  const navigate = useNavigate();

  const handleNavigationToNewsletter = (e) => {
    e.preventDefault();
    navigate("/newsletter");
  };

  return (
    <div className="text-[#ffffff] relative bg-[url('./Assets/Images/NewsletterBg.png')] h-[100vh] w-full my-12">
      <div className="flex w-full h-full justify-center items-center ">
        <img src={newsletter1} alt="react logo" className="h-[85vh]" />
      </div>
      <div className="flex justify-center items-center flex-col absolute ml-[auto] mr-[auto] left-0 right-0 top-0 bottom-0">
        {" "}
        <div className="text-[#ffffff] font-['Roboto'] z-10 text-[4rem] text-center sm:mx-5">
          Are You Fond Of News?
        </div>
        <button
          className="z-10 bg-[#000000] p-5 rounded-[20px] border-[#ffffff] border-4 flex items-center mt-5"
          onClick={handleNavigationToNewsletter}
        >
          View Our Newsletter{" "}
          <span className="text-[1.7rem] ml-3">{"   >"}</span>
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
