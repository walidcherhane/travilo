import React from "react";
import {BsFacebook, BsWhatsapp, BsTelegram, BsTwitter} from "react-icons/bs";

export default function ContactUs() {
  const social = [BsFacebook, BsWhatsapp, BsTwitter, BsTelegram];
  return (
    <>
      <div id='contact' className=" py-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-7 justify-start ">
            <div className=" flex flex-col gap-8 justify-start items-start px-4">
              <div className="capitalize   font-black  font-playfair text-gray-900 text-6xl">
                <div className="text-start font-semibold uppercase text-gray-500 text-2xl">get in touch</div>
                feel free to <br /> contact with us
              </div>
              <div className="leading-7   tracking-widest  mr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque temporibus ex qui natus ea inventore impedit sed excepturi, aliquam fuga.
              </div>
              <div className="w-full">
                <ul className="flex  gap-4 items-center ">
                  {social.map((SocialIcon, index) => (
                    <li key={index} className=" text-pink-800 text-xl  rounded-full bg-pink-200">
                      <button  className="p-4 block"><SocialIcon /></button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="flex  gap-4">
                <div>
                  <span className="uppercase text-sm text-gray-600 font-bold">First Name</span>
                  <input className="  outline-pink-500 w-full  bg-white text-gray-900 mt-2 p-3 rounded-lg  focus:shadow-outline" type="text" placeholder="" />
                </div>
                <div>
                  <span className="uppercase text-sm text-gray-600 font-bold">Last Name</span>
                  <input className="  outline-pink-500 w-full  bg-white text-gray-900 mt-2 p-3 rounded-lg  focus:shadow-outline" type="text" placeholder="" />
                </div>
              </div>
              <div className="mt-4">
                <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                <input className="  outline-pink-500 w-full  bg-white text-gray-900 mt-2 p-3 rounded-lg  focus:shadow-outline" type="Email" />
              </div>
              <div className="mt-4">
                <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                <textarea className="  outline-pink-500 w-full h-32  bg-white text-gray-900 mt-2 p-3 rounded-lg  focus:shadow-outline min-h-[100px]"></textarea>
              </div>
              <div className="mt-4">
                <button className="uppercase text-sm font-bold tracking-wide bg-pink-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
