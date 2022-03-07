import React from 'react';
import { Link } from 'react-router-dom';
import bannerbg from '../assets/images/banner_bg_2.jpg'
export default function CallToAction() {
  return (
      <>
        <div className="relative  overflow-hidden bg-pink-500/30 py-16">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4 justify-center items-center mx-4 text-center sm:mx-auto">
                    <div className="text-5xl text-gray-900 font-extrabold  font-playfair ">
                         Lets enjoy your holiday!
                    </div>
                    <p className="font-light">
                       Now lets make your agenda more exciting than ever
                    </p>
                    <Link to='/contact' className="p-2 px-8 text-slate-100 bg-slate-900 text-lg font-bold tracking-wider rounded-xl transition-all duration-300 hover:scale-110">
                        LETS TALK
                    </Link>
                </div>
            </div>
            <img src={bannerbg} alt=""  className="absolute z-[-1] inset-0 opacity-30 w-full h-full object-cover object-center" />
        </div>
      </>
  );
}
