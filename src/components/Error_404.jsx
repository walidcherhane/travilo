import React from 'react';
import { Link } from 'react-router-dom';
import gif from '../assets/gifs/404 error lost in space.gif'
export default function Error_404() {
  return (
      <>
        <div className="   ">
            <div className="container mx-auto ">
                <div className="flex  h-screen flex-col justify-center items-center">
                    <div className="capitalize text-4xl font-black text-gray-900 mb-4 text-center w-full">
                        <img src={gif} alt='page not found' className="mx-auto" ></img>
                        
                    </div>
                    <Link to='/home' className="p-2 px-8 text-slate-100 bg-slate-900 text-lg font-bold tracking-wider  transition-all duration-300 hover:scale-110">
                        Go back
                    </Link>
                </div>
            </div>    
        </div>
      </>
  );
}
