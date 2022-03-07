import React from 'react';
import TopToursCard from './TopToursCard';
import { useTours } from '../contexts/ToursContext';
export default function PopularTours() {
    const {ToursByCity} = useTours()
    return (
      <>
        <div className="bg-white py-8">
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className='text-4xl font-bold  capitalize'>Top Travel  <span className="text-primary-100">Destinations</span></h1>
                    <p className="text-sm capitalize mt-4 tracking-wide"> Here is some of the places that are currently <br />  popular from our tours </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 mt-8 justify-items-center">
                    {ToursByCity.map((city, i)=>
                        Object.values(city)[0].length >= 1 && <TopToursCard tour={city} city={ Object.keys(city)[0] } cityTours={Object.values(city)[0]}  key={i} />
                    )}
                </div>
            </div>
        </div>
      </>
  )
}
