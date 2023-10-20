import React, { useEffect, useState } from "react";
import latestEvents from "../Assets/Images/latestEvent.png";
import pastEvent1 from "../Assets/Images/pastEvent1.png";
import pastEvent2 from "../Assets/Images/pastEvent2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Events = () => {
  const [data, setData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
  };

  // https://script.google.com/macros/s/AKfycbznwpFHEYQ6EFrXiCaTr02R4UyLq_hqZ4F_SKyZDhFj5JIgksEDkuGcmA_TPOxDElRe/exec

  const URL =
    "https://script.google.com/macros/s/AKfycbznwpFHEYQ6EFrXiCaTr02R4UyLq_hqZ4F_SKyZDhFj5JIgksEDkuGcmA_TPOxDElRe/exec";

  const getEventData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    // console.log(data.data)
    setData(data.data);
  };

  useEffect(() => {
    getEventData();
  }, []);

  function extractor(url_id) {
    if (url_id) {
      if (url_id.search("google.com") !== -1) {
        var id = url_id.split("=");
        var url_link = "https://drive.google.com/uc?export=view&id=";
        // console.log(url_id)
        var url = url_link.concat(id[1]);
      } else {
        url = url_id;
      }

      return url;
    } else
      return "https://drive.google.com/thumbnail?id=1mz35ArVCMbBHQTXebpm2OWFoTvTMrkXA";
  }

  return (
    <div className=" px-12 text-white">
      {/* latest events  */}
      <h1 className="text-white font-bold text-5xl m-4">Latest Events</h1>

      {/* big card  */}
      <div className=" duration-200 hover:scale-105 hover:shadow-xl flex flex-col rounded-lg bg-[#1C1C24] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-2xl md:h-[250px] md:flex-row">
        <div className=" flex md:pl-4 py-4 md:h-full">
          <img
            className=" rounded-2xl w-[400px] object-cover md:p-none px-2"
            src={extractor(data[0]?.Image)}
            alt="latestEvents"
          />
        </div>
        <div className="flex flex-col justify-start p-4 w-auto md:w-[60%]">
          <p className="mb-4 text-base">
            {data[0]?.Description.length > 180
              ? data[0]?.Description.substring(0, 180) + "..."
              : data[0]?.Description}
          </p>
        </div>
      </div>

      {/* past events  */}
      <h1 className="text-white font-bold text-3xl m-4">Past Events</h1>
      <div className="w-full hidden sm:block h-[500px]">
        <Slider {...settings}>
          {/* card */}
          {data.map((e) => (
            <div className="w-1/2 px-4">
              <div className="rounded-xl bg-[#1C1C24] shadow-md duration-200 hover:scale-105 hover:shadow-xl w-[300px] h-[410px]">
                {/* <div className="h-[200px]"> */}
                <img
                  src={extractor(e?.Image)}
                  alt="events"
                  className="h-[200px] w-full px-3 pt-3 object-cover"
                />
                {/* </div> */}
                <div className="px-[9px] py-2 flex flex-col align-bottom ">
                  <p className="text-medium mb-2 text-clip ">
                    {e?.Description.length < 200
                      ? e?.Description
                      : e?.Description.substring(0, 200) + "..."}
                  </p>
                  <p className="text-[#A6ADB1] ">{e?.Date.substring(0, 10)}</p>
                </div>
              </div>
            </div>
          ))}
          {/* card end */}
        </Slider>
      </div>

      {/* responsive carousel  */}
      <div className="w-full block sm:hidden">
        <Slider {...settings2}>
          {data.map((e) => (
          <div className=" overflow-hidden rounded-xl bg-[#1C1C24] shadow-md duration-200 hover:scale-105 hover:shadow-xl  ">
            <img
              src={extractor(e?.Image)}
              alt="plant"
              className="h-auto w-full px-3 pt-3"
            />
            <div className="p-5">
              <p className="text-medium mb-2 ">
                {e?.Description.length < 200
                  ? e?.Description
                  : e?.Description.substring(0, 200) + "..."}
              </p>
              <p className="text-[#A6ADB1]">{e?.Date.substring(0, 10)}</p>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Events;
