import React from 'react';
import bg from "../assets/images/hero-bg-4.jpg";
import ContactUs from '../components/ContactUs';

export default function Contact() {
  return (
      <>
        <div className="bg-white">
            <div className="relative  h-[340px] flex flex-col justify-center items-center  ">
                <img src={bg} className=" absolute object-cover object-center w-full h-full    " alt="" />
                <div className="text-center text-6xl font-playfair font-extrabold text-gray-100 z-10 ">Contact Us</div>
            </div>
            <div className="container mx-auto">
                <ContactUs />
            </div>
        </div>
      </>
  );
}
