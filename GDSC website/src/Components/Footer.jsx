import React from 'react'
import { Link } from 'react-router-dom'
import gdscLogo from '../Assets/Images/gdscLogo.png'
import { BsDiscord, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
function Footer() {
    return (
        <div className='bottom-0  pb-5 '>
            {/* GET MORE UPDATES */}
            <div>
                <h1 className="text-[32px] text-center md:text-[48px] font-medium text-white ">Get More Updates</h1>
                <p className=" p-5  flex justify-around  text-[16px] link link-hover md:text-[20px] pb-10 pt-2 text-white "> Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks </p>
                <div className='flex justify-center'>
                    <input type="email" placeholder="Your e-mail" className="absolute h-[45px] input input-bordered  w-[300px] sm:w-[500px] md:[600px] bg-white rounded-[116px]" />
                    <button className="relative left-[111px] rounded-[101px] w-[80px] h-[45px] bg-black border-white border-[3px] text-white sm:border-2 sm:left-[210px]  ">I'm In</button>
                </div>
            </div>
            {/* FOOTER */}
            <div className='flex justify-center '>
                <footer className='footer block mx-[5px] justify-around items-top p-5 m-20 mb-0 border-t-[0.5px] text-neutral-content border-t-[#fff] w-10/12 sm:grid sm:grid-cols-2 md:w-10/12 md:mx-10 lg:grid-cols-4  lg:w-9/12 lg:border-t-[#fff]  '>
                    <div className=" col-span-2 mb-10 md:w-[245px] l lg:w-4/5 " >
                        <span className=" col-span-2 flex items-center text-[32px] h-[50px] text-[#ffffff] font-medium mb-[26px]    ">
                            <img src={gdscLogo} alt='gdsc logo' className='mr-1 w-[50px] h-[50px] sm:mr-4 ' />  GDSC GTBIT
                        </span>
                        <div className=' text-[#ffffff]' >
                            <p className="link link-hover sm:w-4/5 text-start ">
                                the leading NFT Marketplace on Ethereum Home to the next generation of digital creators.Discover the best NFT collections.
                            </p>
                            <span className=" w-48 flex justify-evenly mt-[33px]" >
                                <Link to="https://discord.com/channels/867457052975824896/867757605521981510" target="_blank" > <BsDiscord className=' text-[25px] sm:text-[30px] ' /> </Link>
                                <Link to="https://twitter.com/gdscgtbit" target="_blank" ><BsTwitter className=' text-[25px] sm:text-[30px] ' /> </Link>
                                <Link to="https://www.instagram.com/gdscgtbit/" target="_blank" ><BsInstagram className=' text-[25px] sm:text-[30px] ' /> </Link>
                                <Link to="https://www.youtube.com/@GDSCGTBIT" target="_blank" ><BsYoutube className=' text-[25px] sm:text-[30px] ' /> </Link>
                            </span>
                        </div>
                    </div>
                    <div className=' mb-10 lg:w-[215px] text-[#ffffff] text-left'>
                        <span className=" flex items-center text-[32px] h-[50px] text-[#ffffff] font-medium mb-[26px] ">Marketplace</span>
                        <span className=" flex flex-col">
                            <Link className="link link-hover mb-2">Explore</Link>
                            <Link className="link link-hover mb-2">Articles</Link>
                            <Link className="link link-hover mb-2">How it Works</Link>
                            <Link className="link link-hover mb-2">Help</Link>
                        </span>
                    </div>
                    <div className='text-[#ffffff] text-left'>
                        <span className=" flex items-center text-[32px] h-[50px] text-[#ffffff] font-medium mb-[26px]">Links</span>
                        <span className=" flex flex-col " >
                            <Link className="link link-hover mb-2">Tokens</Link>
                            <Link className="link link-hover mb-2">API</Link>
                            <Link className="link link-hover mb-2">Big Bounty</Link>
                            <Link className="link link-hover mb-2">Become Partners</Link>
                        </span>
                    </div>
                </footer>
            </div>
            <p className="flex justify-around link link-hover text-[10px] text-[#ffffff] "> © 2023 GDSC GTBIT. all Right Reserved </p>
        </div>
    )
}

export default Footer