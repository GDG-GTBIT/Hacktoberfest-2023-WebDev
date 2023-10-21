import React, { useEffect, useState } from "react";
import Flower from "../Assets/Images/Flower.png";
import leftArrow from "../Assets/Images/LeftArrow.png";
import TopStoriesContent from "./TopStoriesContent";
import TopStoriesCard from "./TopStoriesCard";
import { useNavigate, useParams } from "react-router-dom";
import TopStoriesCarousel from "./TopStoriesCarousel";
const TopStories = () => {
  const navigate = useNavigate();
  const ID = useParams();
  // console.log(ID)

  const [Data, setData] = useState([]);
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    api()
      .then(console.log("useffect worked"))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const api = async () => {
    const data = await fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=2Wj2eFv4afG5rolYFQhIYkjbUNR6wZr6S3s4s93PJ1USN9_J596wZnDIpZKsRTaDR4OErsqc5Ef9K2K8LtO2wXEWhwj7z0_Qm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKBOzUgvLIM_o-Aimqvr2T_aWiOAR4e8mJhoW1C-ygG2lz8ZF5gIZsBtnRz-TaR4gpWUpkEC3fwPfyoCPMZWmnzF9q6MB4JScQ&lib=MriHy1HymLwrWoDuq7gOyXsRdh3XndcC5"
    );
    const val = await data.json();

    var res = [];
    val.data.map((value) => {
      if (value.ID === parseInt(ID.id)) {
      
        setMainData(value);
      } else {
        res.push(value);
       
      }
 
    });
    setData(res);
   
  };

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
    <div className="w-full flex md:flex-row pt-[100px] md:justify-start justify-center flex-col gap-20 p-10">
      <div className="image md:w-[75%] w-full  ">
        <img
          className="py-5 cursor-pointer"
          onClick={() => {
            navigate("/newsletter");
          }}
          src={leftArrow}
          alt="leftarrow"
        />
        <img
          className=" md:justify-center  mx-auto my-0 md:mx-0 "
          src={extractor(mainData?.Image)}
          alt="topstory"
        />
        <div className="flex-col text-white  ">
          <h1 className=" w-[85%] mx-auto md:mx-0 text-3xl md:text-5xl font-extrabold  md:text-left text-center ">
            {mainData?.Title}
          </h1>
          <p className="text-white mb-10 md:mx-0  text-center  md:text-left  text-xl">
            created by {mainData?.Author}
          </p>
        </div>

        <div className="text-white w-[95%] mx-auto md:mx-0 ">
          {<TopStoriesContent content={mainData} />}
        </div>
      </div>

      <div className="stories md:w-[25%] w-full flex  flex-col  text-white ">
        <h1 className="text-white text-center md:text-left font-extrabold leading-10 tracking-normal text-5xl pb-[3rem] ">
          Top Stories
        </h1>
        <div className="md:hidden ">
          <TopStoriesCarousel Data={Data}  extractor={extractor}/>
        </div>

        <div className=" hidden md:flex flex-col  gap-10 ">
          <TopStoriesCard
            Data={Data?.[Data.length - 1]}
            Image={extractor(Data?.[Data.length - 1]?.Image)}
          />
          <TopStoriesCard
            Image={extractor(Data?.[Data.length - 2]?.Image)}
            Data={Data?.[Data.length - 2]}
          />
        </div>
      </div>
    </div>
  );
};

export default TopStories;
