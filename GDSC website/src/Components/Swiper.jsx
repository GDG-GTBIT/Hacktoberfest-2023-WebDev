import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MainSlider  from "./Mainslider";

// Import Swiper styles<
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxf-9U8TbvB82rWpsKljGKAPbLZ87rioufC0UV6oGkgyC6ER3btL1eFkNQZkjziQXSMdg/exec"
        );
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[288px] h-[400px] pb-[10px]"
      >
        { data == null?<></>:
          data.data?.map((q) => (<SwiperSlide>
          <MainSlider data={q} />
          </SwiperSlide>
        ))
        
         }
      </Swiper>
    </>
  );
}
