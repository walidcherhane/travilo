import React from 'react';
import Card from "./Card"
import professionals_guid from '../assets/svg/professional-guids.svg'
import exclusive_tours from '../assets/svg/exclusive-tours.svg'
import friendly_team from '../assets/svg/friendly-team.svg'
export default function Benefits() {
  return (
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto mt-8">
            <div className="text-center ">
              <h1 className="text-4xl font-bold capitalize">
                  We present <span className="text-primary-100">benefits</span>
              </h1>
              <p className="text-sm capitalize mt-4 tracking-wide  ">
                  Holidays become more fun  with our services!
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2  gap-8 mt-8 justify-center  md:mx-4">
              <Card image={professionals_guid} title="Professional Guids" description='experienced guids will be in your side along the way!' />
              <Card image={exclusive_tours} title="Exclusive tours" description='we pay attention to every quality so you will have memerable experince' />
              <Card image={friendly_team} title="friendly support" description='we are always in your help, simply we care about you!' />
            </div>
        </div>
      </section>
  );
}
