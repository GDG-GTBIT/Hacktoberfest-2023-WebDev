import React from 'react'

export default function ProjectCard(props) {
    return (
        <div className="pb-10">
            <div className="flex justify-center item-center bg-gradient-to-b from-red-500 to-cyan-500 w-64 h-[175px]  sm:h-[240px] sm:w-[400px] rounded-3xl backdrop bg-black bg-opacity-80 p-1">
                <div className='sm:pl-10 text-white bg-black opacity-80 rounded-3xl w-64 h-[165px] sm:h-[230px] sm:w-[400px] backdrop bg-black bg-opacity-100 p-6'>
                    <p className='text-[24px] sm:table-caption sm:text-4xl font-bold '>
                        {props.value} {props.title}
                    </p>
                    <p className='pt-[15px] sm:pt-[20px] sm:w-4/5 text-[12px] sm:text-[14px]'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}