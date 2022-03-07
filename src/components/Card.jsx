import React from 'react';
export default function Card({image, title, description}) {



  return (
      <>
        <div className="flex border-t-4  border-pink-500  justify-center items-center flex-col gap-y-4  w-[340px]    p-8 mx-8 sm:mx-0  bg-white">
            <img src={image} className="p-4 rounded-full border-2 border-pink-200 border-dashed  w-[200px] h-[200px]" alt="svg" />
            <div className="text-center">
                <h1 className='text-gray-900 font-bold capitalize text-2xl'>{title}</h1>
                <p className="leading-5 mt-2 font-light ">
                    {description}
                </p>
            </div>
        </div>
      </>
  );
}
