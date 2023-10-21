import { React, useState, useEffect } from "react";
import TeamCardImage from "../Assets/Images/teamCard.png";
import TeamIcon from "../Assets/Images/teamIcon.png";
import TeamMemberCard from "./TeamMemberCard";
import { useNavigate, useParams } from "react-router-dom/dist";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function TeamCard() {
  const id = useParams();
  const [LeadMember, setLeadMember] = useState([]);
  const [Member, setMember] = useState([]);
  const [Rem, setRem] = useState(0);
  const [teamData, setTeamData] = useState();
  const navigate = useNavigate();
  const TeamType = id;
  const newStr = TeamType.id.replace(/-/g, " ");
  const [isMobile, setIsMobile] = useState(false);
  const isMobileView = () => {
    const screenWidth = window.innerWidth;
    return screenWidth <= 768;
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    arrows: false,
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
  const fetchTeamData = async () => {
    const res = await fetch(
      `https://script.googleusercontent.com/macros/echo?user_content_key=YCEFvY0qk6feYhi6TBrHvkEORH4vWJb69KOLmdJI9u3nUeqCh8Pb1zzSyDUZ98xQsU9PIBxws-Am8g8eGjibEx-DGcaIBs08m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEcQUHRZ7Z3qyZ-OLpkgyfs1fVnCxFi7EosIcYiS-ZOfiL4TjepHLCUYqySL0WlN9Woat8yqVZbeHZVkrng5ooK1ieS7_7Qp5w&lib=MrabAe7-4E2GV5XEtnSveWdY014KZfeVp`
    );
    const resData = await res.json();
    // console.log(resData);
    resData.data.map((value) => {
      // console.log(value.Team)
      // console.log(newStr)
      if (value.Team.includes(newStr)) {
        setTeamData(value);
      }
    });
  };
  const fetchTeamCardData = async () => {
    const res = await fetch(
      `https://script.googleusercontent.com/macros/echo?user_content_key=86qpIJrDBp94bgqn4gAkoc6MkLSoiX-IETj05jOjDuLOPD5Q6zb-_9NzV4xLMoLv958eVsGPxLKVthnZYSmmKusZhmk7KoBQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFS3Zf-y7NbFL3Vg76c2Oi-xjC1NaPrEkOabdHc2FlinVBePefQXAM-suZ5UX1F7_EvMuCWNlqMRK3w7F0Z9tKKi-8eiLZd-Pw&lib=M06TqiQMyNAHr0nr176xu7tY014KZfeVp`
    );
    const resData = await res.json();
    var Leadresult = [];
    var result = [];
    resData.data.map((value) => {
      if (value.Team === newStr) {
        if (value.Designation === "Lead") {
          Leadresult.push(value);
        } else {
          result.push(value);
        }
      }
    });
    setLeadMember(Leadresult);

    setMember(result);
    // console.log(result.length);
    setRem(4 - Leadresult.length);
  };

  useEffect(() => {
    fetchTeamCardData();
    fetchTeamData();
    // console.log(teamData)
    setIsMobile(isMobileView());
  }, []);

  return (
    <div className="teamCardWrapper w-100 flex flex-col items-center justify-center pt-[100px]">
      <div className="flex flex-col justify-center items-center">
        <div className=" m-3 teamCardHeading font-roboto text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          We create games with a mad passion
        </div>
        <div className=" m-3 w-2/3 teamCardSubHeading font-roboto xs:text-xl md:text-xl  text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris .
        </div>
      </div>
      {/* Main Content */}
      <div className="teamCardBannerWrapper w-100 m-10 flex flex-col md:flex-row items-start justify-center  ">
        <div className="teamCardBannerImage  w-full mx-auto ">
          <img
            src={TeamCardImage}
            style={{ maxWidth: "480px" }}
            className="w-full  mx-auto my-0"
          />
        </div>
        <div className="teamCardBannerContent m-2 flex flex-col items-center justify-around ">
          <div
            className="teamCardbannerContentIcon flex justify-center items-center  text-white bg-slate-600 rounded-[30px]"
            style={{ width: "100px", height: "100px" }}
          >
            <img src={extractor(teamData?.Logo)} className="w-[100%] rounded-3xl h-[100%] p-3" />
          </div>
          <div className="teamCardbannerContentTitle m-2 w-full font-roboto text-2xl  font-bold text-white text-center">
            {newStr}
          </div>
          {teamData ?
            <>
              <div className="teamCardbannerContentDescription p-3 m-1 max-w-[500px] font-roboto  sm:text-base  text-white text-center">
                {teamData?.TeamDesc}
              </div>
            </>
          :<>
          <div
            class="inline-block h-8 w-8 m-3 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </>}
          <div className="teamCardbannerContentButton  ">
            <button className="flex justify-center items-center bg-black border rounded px-5 py-2 border-slate-100 text-white hover:bg-gray-900  hover:shadow-md hover:translate-y-[-1px] active:shadow-inner active:translate-y-0 ">
              See More
            </button>
          </div>
        </div>
      </div>
      {/* Team Member Cards */}
      <div className="w-full flex justify-center md:justify-end p-5">
        <button
          type={"button"}
          className="bg-[#0A1516] text-white rounded-md p-2 border border-white"
          onClick={() => {
            navigate(`/Members/${TeamType.id}`);
          }}
        >
          see more members{" "}
        </button>
      </div>
      {LeadMember.length === 0 && Member.length === 0 ? (
        <>
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </>
      ) : isMobile ? (
        <div className=" justify-evenly w-full mt-20 flex flex-wrap 2xl:px-20">
          <Slider {...settings2} style={{ width: "95%", maxWidth: "800px" }}>
            {LeadMember &&
              LeadMember.map((value, idx) => (
                <>
                  <div className="  ">
                    <TeamMemberCard key={idx} data={value} />
                  </div>
                  {/* Add more slides here */}
                </>
              ))}
            {Member &&
              Member.map(
                (val, index) =>
                  index < Rem && (
                    <>
                      {
                        <div className=" px-2 ">
                          {" "}
                          <TeamMemberCard key={index} data={val} />
                        </div>
                      }
                    </>
                  )
              )}
          </Slider>
        </div>
      ) : (
        <div className=" flex w-full flex-row items-center justify-evenly my-10 flex-wrap">
          {LeadMember &&
            LeadMember.map((value, idx) => (
              <>
                <div className=" px-2 ">
                  <TeamMemberCard key={idx} data={value} />
                </div>
                {/* Add more slides here */}
              </>
            ))}
          {Member &&
            Member.map(
              (val, index) =>
                index < Rem && (
                  <>
                    {
                      <div className=" px-2 ">
                        {" "}
                        <TeamMemberCard key={index} data={val} />
                      </div>
                    }
                  </>
                )
            )}
        </div>
      )}
    </div>
  );
}

export default TeamCard;
