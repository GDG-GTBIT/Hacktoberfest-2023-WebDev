import React, { useEffect, useState } from "react";
import GDSC from "../Assets/Images/gdscLogo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [ScrollData, SetScrollData] = useState(false);
  const [teamData, setTeamData] = useState(false);
  const [opennav, setopennav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        SetScrollData(true);
      } else {
        SetScrollData(false);
      }
    });
  }, []);
  return (
    <>
      <div
        className={`${
          ScrollData === true
            ? "bg-gradient-to-l from-[#FF2929] to-[#22B6DD]"
            : "bg-[#0000004D]"
        } transition-all  duration-700 fixed top-0 z-50 items-center justify-between p-5 w-full text-white md:flex hidden`}
      >
        <div className="flex items-center gap-3">
          <img src={GDSC} alt="logo" />
          <div className="font-semibold md:text-2xl text-sm cursor-pointer">
          <div
            className="cursor-pointer"
            onClick={() => {
              setTeamData(false);
              navigate("/");
            }}
          >
            Google Developer Clubs GTBIT
          </div>
        </div>
        </div>

        <div className="flex gap-5 font-semibold md:text-2xl text-sm">
          <div
            className="cursor-pointer"
            onClick={() => {
              setTeamData(false);
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className="flex flex-row relative justify-center items-center gap-2 cursor-pointer"
            onClick={() => {
              setTeamData(!teamData);
            }}
            
          >
            Teams{" "}
            <span
              onClick={() => {
                setTeamData(!teamData);
              }}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-90deg-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
                />
              </svg>{" "}
            </span>
            {teamData && (
              <>
                {" "}
                <div className="bg-black border rounded-md border-white p-4 flex flex-col absolute top-[30px] z-1">
                  <div
                    onClick={() => {
                      setTeamData(false);
                      navigate("/Members/Design-Team");
                    }}
                    className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                  >
                    Design
                  </div>
                  <div
                    onClick={() => {
                      setTeamData(false);
                      navigate("/Members/Web-Dev-Team");
                    }}
                    className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                  >
                    Web Dev
                  </div>
                  <div
                    onClick={() => {
                      setTeamData(false);
                      navigate("/Members/App-Dev-Team");
                    }}
                    className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                  >
                    App Dev
                  </div>
                  <div
                    onClick={() => {
                      setTeamData(false);
                      navigate("/Members/Cyber-Team");
                    }}
                    className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                  >
                    Cyber Sec
                  </div>
                  <div
                    onClick={() => {
                      setTeamData(false);
                      navigate("/Members/ML-AI-Team");
                    }}
                    className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                  >
                    ML/AI
                  </div>
                  <div
                    onClick={() => {
                      setTeamData(false);
                      navigate("/Members/Management-Team");
                    }}
                    className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                  >
                    Management
                  </div>
                  <div
                    onClick={() => {
                      setTeamData(false);
                      navigate("/Members/Content-Team");
                    }}
                    className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                  >
                    Content
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setTeamData(false);
              navigate("/newsletter");
            }}
          >
            Newsletter{" "}
          </div>
        </div>
      </div>
      <div
        className={`w-full ${
          ScrollData === true
            ? "bg-gradient-to-l from-[#FF2929] to-[#22B6DD]"
            : "bg-[#0000004D]"
        } transition-all duration-700 top-0 fixed p-2 z-50  justify-between items-center ${
          opennav === true ? "hidden" : "flex"
        } md:hidden text-white`}
      >
        <div className="flex  items-center gap-3">
          <img src={GDSC} alt="logo" />
          <div className="font-semibold md:text-2xl text-sm cursor-pointer">
            Google Developer Clubs GTBIT
          </div>
        </div>
        <div
          onClick={() => {
            setopennav(!opennav);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
      <div
        className={`w-full md:hidden top-0 fixed z-50 h-auto p-2 bg-gradient-to-l from-[#FF2929] to-[#22B6DD] ${
          opennav === true ? "translate-y-[0px]" : "translate-y-[-300px]"
        } duration-700 transition-all`}
      >
        <div className="w-full relative gap-5 flex h-full justify-center flex-col items-center font-semibold text-xl">
          <div className="flex  items-center gap-3">
            <img src={GDSC} alt="logo" />
            <div className="font-semibold md:text-2xl text-sm cursor-pointer">
              Google Developer Clubs GTBIT
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
              setTeamData(false);
              setopennav(false);
            }}
          >
            Home
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/newsletter");
              setTeamData(false);
              setopennav(false);
            }}
          >
            NewsLetter
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setTeamData(!teamData);
            }}
          >
            Teams
          </div>
          {teamData && (
            <>
              {" "}
              <div className="text-black text-center flex flex-col top-[30px] z-1">
                <div
                  onClick={() => {
                    setTeamData(false);
                    setopennav(false);
                    navigate("/Members/Design-Team");
                  }}
                  className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                >
                  Design
                </div>
                <div
                  onClick={() => {
                    setTeamData(false);
                    setopennav(false);

                    navigate("/Members/Web-Dev-Team");
                  }}
                  className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                >
                  Web Dev
                </div>
                <div
                  onClick={() => {
                    setTeamData(false);
                    setopennav(false);
                    navigate("/Members/App-Dev-Team");
                  }}
                  className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                >
                  App Dev
                </div>
                <div
                  onClick={() => {
                    setTeamData(false);
                    setopennav(false);
                    navigate("/Members/Cyber-Team");
                  }}
                  className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                >
                  Cyber Sec
                </div>
                <div
                  onClick={() => {
                    setTeamData(false);
                    setopennav(false);
                    navigate("/Members/ML-AI-Team");
                  }}
                  className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                >
                  ML/AI
                </div>
                <div
                  onClick={() => {
                    setTeamData(false);
                    setopennav(false);
                    navigate("/Members/Management-Team");
                  }}
                  className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                >
                  Management
                </div>
                <div
                  onClick={() => {
                    setTeamData(false);
                    setopennav(false);
                    navigate("/Members/Content-Team");
                  }}
                  className="text-sm rounded-md hover:bg-gradient-to-l from-[#FF2929] to-[#22B6DD] p-1 cursor-pointer"
                >
                  Content
                </div>
              </div>
            </>
          )}

          <div
            onClick={() => {
              setopennav(!opennav);
              setTeamData(false);
            }}
            className="absolute right-0 top-0 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
