import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ImagesShowCase from './ImagesShowCase';
import Statistics from './Statistics';

export default function States() {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)'})

  return (
      <>
        <div className="bg-gray-50 py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-6 gap-10">
                {isLargeScreen && (
                    <div className="col-span-3   flex items-center justify-center ">
                        <ImagesShowCase  />
                    </div>
                )}
                <div className=" col-span-full lg:col-span-3 md:ml-8 flex gap-8 flex-col justify-start mx-5 ">
                    <div className="text-start capitalize">
                        <h1 className="text-4xl font-bold leading-10 mb-4">
                             always provide the <br /> best <span className="text-primary-100"> service</span>
                        </h1>
                        <p >we have been established for years to provide <br /> the best travel experience</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 ">
                        <Statistics title="Our Happy Friends" state='+25K '  description='thousands of our fully satisfied friends' />
                        <Statistics title="our trip categories" state='+30 '  description='various types of tours for you' />
                        <Statistics title="our available tours " state='+100'  description='hundreds of tours and places are available ' />
                        <Statistics title="our transportation" state='+10'  description='multiple cars just to take you to your next destination' />
                    </div>
                </div>
                </div>
            </div>
        </div>

      </>
  );
}
