import React from 'react'
import ProjectCard from './ProjectCard';
export default function ProjectPage() {
    return (
        <div className='w-full flex items-center justify-center bg-black'>
            <div className="flex flex-col my-[70px]">
                <div className="flex justify-center  w-auto h-auto">
                    <div className="items-start mb-10 sm:mb-28">
                        <p className="flex text-center text-[30px] sm:text-[45px] lg:text-[62px] text-[#fff] font-extrabold ">discover WHAT we MADE in <br />the TECH world</p>
                    </div>
                </div>
                <div className="grid justify-center items-center lg:flex ">
                    <div className='mx-14'>
                        <ProjectCard value='+30' title='projects' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' />
                    </div>
                    <div className='mx-14'>
                        <ProjectCard value='15' title='Achievements' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' />
                    </div>
                </div>
            </div>
        </div>
    );
}
