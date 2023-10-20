import React, { useState, useEffect } from "react";
// import MemberCard from '../Components/MemberCard';
import MemberCard from "../Components/MemberCard";
import { useParams } from "react-router-dom";

const MemberList = () => {
  const id = useParams();
  const [Member, setMember] = useState([]);
  const [coreMember, setCoreMember] = useState([]);
  const [leadMember, setLeadMember] = useState([]);
  const [OpenMember  , setOpenMember] = useState(false);
  const [OpenCoreMember , setOpenCoreMember] = useState(false);
  const [OpenLeadMember , setOpenLeadMember] = useState(false);
  const TeamType = id;
  const newStr = TeamType.id.replace(/-/g, " ");
  const apiCall = async () => {
    if (newStr.includes("Core Team")) {
      const res = await fetch(
        `https://script.googleusercontent.com/macros/echo?user_content_key=86qpIJrDBp94bgqn4gAkoc6MkLSoiX-IETj05jOjDuLOPD5Q6zb-_9NzV4xLMoLv958eVsGPxLKVthnZYSmmKusZhmk7KoBQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFS3Zf-y7NbFL3Vg76c2Oi-xjC1NaPrEkOabdHc2FlinVBePefQXAM-suZ5UX1F7_EvMuCWNlqMRK3w7F0Z9tKKi-8eiLZd-Pw&lib=M06TqiQMyNAHr0nr176xu7tY014KZfeVp`
      );
      const resData = await res.json();
      var result = [];
      resData.data.map((value) => {
        if (value.Team.includes(newStr)) {
          result.push(value);
        }
      });

      result.sort((a, b) => {
        const nameA = a.Name.toUpperCase(); // convert name to uppercase
        const nameB = b.Name.toUpperCase(); // convert name to uppercase

        if (nameA < nameB) {
          return -1; // a should come before b
        }
        if (nameA > nameB) {
          return 1; // a should come after b
        }
        return 0; // a and b are equal
      });

      // console.log(result);
      setCoreMember(result);
      setOpenCoreMember(true);
      // setOpenLeadMember(true);
      // setOpenMember(true);
    } else {
      const res = await fetch(
        `https://script.googleusercontent.com/macros/echo?user_content_key=86qpIJrDBp94bgqn4gAkoc6MkLSoiX-IETj05jOjDuLOPD5Q6zb-_9NzV4xLMoLv958eVsGPxLKVthnZYSmmKusZhmk7KoBQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFS3Zf-y7NbFL3Vg76c2Oi-xjC1NaPrEkOabdHc2FlinVBePefQXAM-suZ5UX1F7_EvMuCWNlqMRK3w7F0Z9tKKi-8eiLZd-Pw&lib=M06TqiQMyNAHr0nr176xu7tY014KZfeVp`
      );
      const resData = await res.json();
      var result = [];
      var leadResult = [];
      // console.log(resData);
      resData.data.map((value) => {
        if (value.Team.includes(newStr)) {
          if (value.Designation === "Lead") {
            leadResult.push(value);
          } else {
            result.push(value);
          }
        }
      });

      result.sort((a, b) => {
        const nameA = a.Name.toUpperCase(); // convert name to uppercase
        const nameB = b.Name.toUpperCase(); // convert name to uppercase

        if (nameA < nameB) {
          return -1; // a should come before b
        }
        if (nameA > nameB) {
          return 1; // a should come after b
        }
        return 0; // a and b are equal
      });

      leadResult.sort((a, b) => {
        const nameA = a.Name.toUpperCase();
        const nameB = b.Name.toUpperCase();

        if (nameA < nameB) {
          return 1;
        } else if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      // console.log(result);
      setMember(result);
      setLeadMember(leadResult);
      setOpenLeadMember(true);
      setOpenMember(true);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    if(TeamType.id !== "Core Team") 
    {
      setCoreMember([]);
    }
    apiCall();
  }, [TeamType.id]);

  return (
    <div className="w-full h-auto pt-[100px]">
      <div className="w-full p-5 h-auto flex justify-between gap-2">
        <div className="text-white text-4xl font-bold">
          {TeamType.id.replace(/-/g, " ")}
        </div>
        <div className="border border-white rounded-3xl flex justify-center items-center w-1/2 sm:w-1/5">
          <div className="w-1/2 flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#fff"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>

          <input
            placeholder="Search"
            className="p-2 focus:w-full transition-all duration-400 outline-none text-white w-1/2 bg-transparent"
          ></input>
        </div>
      </div>
          {
            newStr === "Core Team" && <div className="text-white text-2xl w-full text-center mb-4 font-bold">
            Team Members
          </div>
          }
          {newStr === "Core Team" && OpenCoreMember === false && (
            <>
            
            <div className="w-full flex justify-center">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
            </>
          )
          }

      {coreMember && (
        <div className="w-full grid grid-cols-1 p-2 justify-items-center place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {coreMember &&
            coreMember.map((value, index) => (
              <MemberCard key={index} data={value} />
            ))}
        </div>
      )}
      {
        newStr !== "Core Team" && <div className="text-white text-2xl w-full mb-4 text-center font-bold">
        Team Lead
      </div>
      }
          
          {OpenLeadMember === false  &&  newStr !== "Core Team" && (
            <div className="w-full flex justify-center">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          )}
          <div className="w-full grid grid-cols-1 p-2 justify-items-center place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {leadMember &&
              leadMember.map((value, index) => (
                <MemberCard key={index} data={value} />
              ))}
          </div>
          {
            newStr !== "Core Team" && <div className="text-white text-2xl w-full text-center mb-4 font-bold">
            Team Members
          </div>
          }
          
          {OpenMember === false && newStr !== "Core Team" &&  (
            <div className="w-full flex justify-center">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          )}

          <div className="w-full grid grid-cols-1 p-2 justify-items-center place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Member &&
              Member.map((value, index) => (
                <MemberCard key={index} data={value} />
              ))}
          </div>
    </div>
  );
};

export default MemberList;
