import React from 'react';
import bg from "../assets/images/hero-bg-1.jpg";
import bgSquare from "../assets/images/bg-square.jpg"
import { Link } from 'react-router-dom';

import avatar_1 from "../assets/images/avatars/av-(1).jpg"
import avatar_2 from "../assets/images/avatars/av-(2).jpg"
import avatar_3 from "../assets/images/avatars/av-(3).jpg"


import {BsInstagram, BsTwitter, BsWhatsapp} from 'react-icons/bs'
export default function About() {
  return (
      <>
        <div className="bg-white">
             <div className="relative  h-[340px] flex flex-col justify-center items-center  ">
                <img src={bg} className=" absolute object-cover object-center w-full h-full    " alt="" />
                <div className="text-center text-6xl font-playfair font-extrabold text-gray-100 z-10 ">About Us</div>
            </div>
            <div className="container mx-auto"> 
                <div className="py-8   flex flex-col text-center justify-center items-center">
                    <div className="italic  text-xl text-gray-900">
                        We are a passionate team with the vision of delivering <br />
                        the best & exiting experience for customers
                    </div>
                    <div className="uppercase text-pink-600 font-semibold mt-4 text-sm">
                        travel . experience . enjoy
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className=" flex flex-col gap-8 justify-start items-start px-4">
                        <div className="capitalize   font-black  font-playfair text-gray-900 text-6xl">
                            <div className="text-start font-semibold uppercase text-gray-500 text-xl">about travilo</div>
                            We Are happy <br /> to know <br /> each other
                        </div>
                        <div className="leading-7   tracking-widest  mr-4 text-gray-600 ">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </div>
                        <div className="mt-4">
                            <Link to='/tours' className='bg-gray-900 text-gray-100 font-semibold uppercase px-8  py-4 rounded-lg transition duration-300   hover:bg-gray-700 shadow-2xl shadow-gray-800    '> find tours </Link>
                        </div>
                    </div>
                    <div className="  w-[80%] mx-auto  shadow-2xl shadow-gray-800/20  border-[20px]  border-white  overflow-hidden">
                        <img src={bgSquare} className="w-full object-cover" alt="" />
                    </div>
                </div>
                <div className=" flex mt-10 flex-col w-full text-center justify-center items-center ">
                    <div className="capitalize text-center  font-bold   text-gray-900 text-4xl">
                        meet our team
                    </div>
                    <div className="mt-8  flex flex-wrap justify-center gap-8 items-center w-full">
                            <div className="p-4   w-[270px] text-center">
                                <div className="w-full">
                                    <div className="rounded-full mx-auto w-[70%] border-8  border-white shadow-lg overflow-hidden">
                                        <img src={avatar_1} alt="" />
                                    </div>
                                    <div className="mt-4 font-semibold text-xl">
                                        John Bennett
                                    </div>
                                    <div className="text-pink-600 italic text-sm mt-2">
                                        CO-FOUNDER & CFO
                                    </div>
                                    <div className="mt-4 text-sm leading-5 tracking-wider font-light">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor sociis natoque
                                    </div>
                                    <div className="flex mx-auto w-full justify-center ">
                                        <div className="bg-white text-lg p-4 text-pink-400 text-normal rounded-full transition-shadow cursor-pointer hover:shadow-2xl shadow-pink-400">
                                            <BsTwitter />
                                        </div>
                                        <div className="bg-white text-lg p-4 text-pink-400 text-normal rounded-full transition-shadow cursor-pointer hover:shadow-2xl shadow-pink-400">
                                            <BsInstagram />
                                        </div>
                                        <div className="bg-white text-lg p-4 text-pink-400 text-normal rounded-full transition-shadow cursor-pointer hover:shadow-2xl shadow-pink-400">
                                            <BsWhatsapp />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4   w-[270px] text-center">
                                <div className="w-full">
                                    <div className="rounded-full mx-auto w-[70%] border-8  border-white shadow-lg overflow-hidden">
                                        <img src={avatar_2} alt="" />
                                    </div>
                                    <div className="mt-4 font-semibold text-xl">
                                        John Bennett
                                    </div>
                                    <div className="text-pink-600 italic text-sm mt-2">
                                        CO-FOUNDER & CFO
                                    </div>
                                    <div className="mt-4 text-sm leading-5 tracking-wider font-light">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor sociis natoque
                                    </div>
                                    <div className="flex mx-auto w-full justify-center ">
                                        <div className="bg-white text-lg p-4 text-pink-400 text-normal rounded-full transition-shadow cursor-pointer hover:shadow-2xl shadow-pink-400">
                                            <BsTwitter />
                                        </div>
                                        <div className="bg-white text-lg p-4 text-pink-400 text-normal rounded-full transition-shadow cursor-pointer hover:shadow-2xl shadow-pink-400">
                                            <BsInstagram />
                                        </div>
                                        <div className="bg-white text-lg p-4 text-pink-400 text-normal rounded-full transition-shadow cursor-pointer hover:shadow-2xl shadow-pink-400">
                                            <BsWhatsapp />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4   w-[270px] text-center">
                                <div className="w-full">
                                    <div className="rounded-full mx-auto w-[70%] border-8  border-white shadow-lg overflow-hidden">
                                        <img src={avatar_3} alt="" />
                                    </div>
                                    <div className="mt-4 font-semibold text-xl">
                                        John Bennett
                                    </div>
                                    <div className="text-pink-600 italic text-sm mt-2">
                                        CO-FOUNDER & CFO
                                    </div>
                                    <div className="mt-4 text-sm leading-5 tracking-wider font-light">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor sociis natoque
                                    </div>
                                    <div className="flex mx-auto w-full justify-center ">
                                        <div className="bg-white text-lg p-4 text-pink-400 text-normal rounded-full transition-shadow cursor-pointer hover:shadow-2xl shadow-pink-400">
                                            <BsTwitter />
                                        </div>
                                        <div className="bg-white text-lg p-4 text-pink-400 text-normal rounded-full transition-shadow cursor-pointer hover:shadow-2xl shadow-pink-400">
                                            <BsInstagram />
                                        </div>
                                        <div className="bg-white text-lg p-4 text-pink-400 text-normal rounded-full transition-shadow cursor-pointer hover:shadow-2xl shadow-pink-400">
                                            <BsWhatsapp />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
      </>
  )
}
