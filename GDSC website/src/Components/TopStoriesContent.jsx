import React from 'react'

const TopStoriesContent = ({content}) => {
  return (
    <>
        <p className="md:text-2xl text-lg  font-normal leading-10 tracking-widest text-justify md:text-left w-full  ">
              {content?.Description}
              </p>
             
            
             
    </>
  )
}

export default TopStoriesContent
