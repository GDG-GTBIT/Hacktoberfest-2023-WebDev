import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import NewsletterpageCard from "../Components/NewsletterpageCard";
import NewsletterpageCardB from "../Components/NewsletterpageCardB";
import { useNavigate, useParams } from "react-router-dom";

const Newsletterpage = () => {
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

  const slides = [];

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
    <div className="text-center pt-[100px] h-[80vh] w-[full] object-center m-auto py-[100px] md:py-[5rem]  px-4 relative group">
      {/* <div
            style={{ backgroundImage: `url(${extractor(Data?.[currentIndex]?.Image)})` }}
            className='w-full relative  h-full rounded-2xl bg-center bg-cover duration-500 '
          > */}
      <div className="w-full h-full relative">
      <img
        className="md:w-2/3 w-full relative mx-auto my-0  h-full rounded-2xl bg-center bg-cover duration-500 "
        src={extractor(Data?.[currentIndex]?.Image)}
        alt="phto"
      />

      <div className=" absolute  max-w-[80%] md:max-w-[40%] h-auto bottom-0 md:left-[30%] left-[10%] bg-slate-50 bg-opacity-50 rounded-xl ">
        <div className="flex flex-col justify-center">
          <div className="  font-roboto md:text-3xl sm:text-sm font-bold text-black text-center py-2">
            {Data?.[currentIndex]?.Title}
          </div>

          <div className="md:flex hidden h-[20%] items-center justify-center ">
            <p className="text-sm tracking-wide  text-black block  text-center  md:p-2">
              {Data?.[currentIndex]?.Description.substr(0, 300) + "..."}
            </p>
          </div>
          <div className="text-xs font-size: 0.75rem line-height: 1rem my-5   ">
            <p
              className="cursor-pointer  text-right mx-3 font-bold"
              onClick={() => {
                navigate(`/newsletter/${Data?.[currentIndex]?.ID}`);
              }}
            >
              read more
            </p>
          </div>
        </div>
      </div>
      </div>
      
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {Data.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <div className="content-center align-content: center">
              <RxDotFilled color="white" />
            </div>
          </div>
        ))}
      </div>
      <div div className=" Wrapper w-100 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className=" m-3 Heading font-roboto text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center py-10">
            Stories
          </div>
        </div>
      </div>
      <NewsletterpageCard
        Data={Data?.[Data.length - 3]}
        Image={extractor(Data?.[Data.length - 3]?.Image)}
      />
      <NewsletterpageCardB
        Data={Data?.[Data.length - 4]}
        Image={extractor(Data?.[Data.length - 4]?.Image)}
      />
      <NewsletterpageCard
        Data={Data?.[Data.length - 2]}
        Image={extractor(Data?.[Data.length - 2]?.Image)}
      />
    </div>
  );
};

export default Newsletterpage;
