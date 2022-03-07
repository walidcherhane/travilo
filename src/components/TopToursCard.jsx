import React from 'react';
import { urlFor } from '../client';
import {MdTour} from 'react-icons/md'
import { Link } from 'react-router-dom';
export default function TopToursCard({city, cityTours}) { 
  return <>
    <div className=' group relative hover:shadow-2xl hover:-translate-y-5 transition-all duration-500     trans overflow-hidden mx-8 p-0 min-h-[400px]  w-[340px]  border-b-4 border-pink-500 '>
          <div className="relative  overflow-hidden  z-20  ">
            <img src={urlFor(cityTours[0].imgUrl)} className="z-10   scale-150  group-hover:scale-100 transition-all  duration-1000     "  alt="" />
            <div className=" flex gap-2 items-center z-20 text-gray-100 absolute  bg-gradient-to-t from-black/75 to-transparent   inset-x-0 bottom-0 p-4 text-sm capitalize  ">
              <MdTour />
              {cityTours.length} tour{cityTours.length > 1 &&'s'}
              </div>  
          </div>
        <div className="   z-30   flex flex-col justify-center items-start absolute bottom-0 inset-x-0  px-4 py-6 text-start ">
            <div className="mb-2 text-2xl capitalize font-bold text-gray-800">{city}</div>
            <p className="text-light tracking-wider text-sm text-gray-400 line-clamp-2 " > Lorem ipsum dolor sit amet</p>
          <Link to={`/tours-by-city/${city}`}  className=" px-4 py-2 ml-auto mt-4 text-gray-500 bg-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 border-[1px] border-pink-500">See More</Link>
        </div>
    </div>
  </>;
}
