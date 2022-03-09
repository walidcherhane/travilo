import { DateRangePicker } from '@mantine/dates';
import {FaSearch} from 'react-icons/fa'
import React, { useState } from 'react';
import { Select } from '@mantine/core';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


import hero_bg from '../assets/images/hero-bg.jpg'
import hero_bg_1 from '../assets/images/hero-bg-1.jpg'
import hero_bg_2 from '../assets/images/hero-bg-2.jpg'
import hero_bg_3 from '../assets/images/hero-bg-3.jpg'
import hero_bg_4 from '../assets/images/hero-bg-4.jpg'
import hero_bg_5 from '../assets/images/hero-bg-5.jpg'
import hero_bg_6 from '../assets/images/hero-bg-6.jpg'
import hero_bg_7 from '../assets/images/hero-bg-7.jpg'



export default function Hero({title}) {
  const [searchData, setSearchData] = useState({dis: "marrakech", date: Date.now(), type: 'adventure'})
  const heroImages = [hero_bg, hero_bg_1, hero_bg_2, hero_bg_3, hero_bg_4, hero_bg_5, hero_bg_6, hero_bg_7]

  return (
    <div className='relative overflow-hidden  '>
      <div className="container mx-auto">
      <div className=" pt-[20%] lg:pt-[15%] text-gray-50 ">
          { title ? title : (
            <>
              <div className="text-center  md:text-left  text-7xl lg:text-8xl font-black font-playfair ">
                Explore <br />
                Your Travel
              </div>
              <div className="text-center lg:text-left mt-8 font-light text-lg tracking-wide ">
                Discover your next great adventure, become an explorer to get started!
              </div>
            </>
          )}
          <div className="flex flex-wrap rounded-md  items-stretch   gap-4 bg-white/10 border-[1px] border-white/20   backdrop-blur-sm  shadow-sm  w-full mx-auto  px-9 py-8 mt-8 ">
            <div className="bg-gray-300 w-full md:flex-1  rounded-md  shadow-xl px-5 py-4">
            <Select
              label="Where to start ?"
              placeholder="Pick a destination"
              onChange={(value)=>{setSearchData({...searchData, dis: value})}}
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
              ]}
              maxDropdownHeight={280}
              nothingFound="No options available"
              searchable
            />
            </div>
            <div className="bg-gray-300 w-full md:flex-1  rounded-md  shadow-xl px-5 py-4">
            <Select
              className='bg-transparent'
              label="Trip type?"
              placeholder="Pick a type"
              onChange={(value)=>{setSearchData({...searchData, Type: value})}}
              data={[
                { value: 'Adventure Tour', label: 'Adventure Tour' },
                { value: 'Group Tour', label: 'Group Tour' },
                { value: 'Single Tour', label: 'Single Tour' },
                { value: 'City Tour', label: 'City Tour' },
              ]}
              maxDropdownHeight={280}
              nothingFound="No options available"
              searchable
            />
            </div>
            <div className="bg-gray-300 flex-1  rounded-md  shadow-xl px-5 py-4">
            <DateRangePicker
              label="When you are ready ?"
              placeholder="Pick dates range"
              value={searchData.date}
              onChange={(value)=>{setSearchData({...searchData, date: value})}}
            />
            </div>
              
            <button className="text-lg font-bold  bg-gray-300  text-gray-700 p-10 capitalize rounded-md ">
                <FaSearch />
              </button>
          </div>
      </div>
      </div>
      <div className="absolute h-screen inset-0 z-[-1]">
        <Carousel 
          autoPlay 
          infiniteLoop 
          transitionTime={2000} 
          showThumbs={false} 
          showIndicators={false}
          showStatus={false}
          showArrows={false}
        >
            { heroImages.map((img, index) =>(
              <img src={img} key={index} className='h-screen object-cover object-center'  alt="" />
            ))}
        </Carousel>
      </div>
    </div>
  )
}
