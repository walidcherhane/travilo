import React, { useEffect,useState } from "react";
import bg from "../assets/images/hero-bg-3.jpg";
import {Grid } from '@mantine/core'
import {urlFor} from "../client"
import { useTours } from "../contexts/ToursContext";
import { useParams,Link } from "react-router-dom";
const ToursByCity = () => {
    const {city} = useParams()
    const {getCityTours} = useTours()
    const [cityTours] = useState(getCityTours(city));

  return (
    <>
      <div className="bg-white  relative">
        <div className="relative  h-[340px] flex flex-col justify-center items-center  ">
          <img src={urlFor(cityTours[0].imgUrl)} className=" absolute object-cover object-center w-full h-full    " alt="" />
          <div className="text-center text-6xl font-playfair font-extrabold text-gray-100 z-10 "> {city} Tours</div>
        </div>
        <div className="container mt-8 mx-auto ">
          <div className="grid  lg:grid-cols-5 gap-2 relative ">
            <div className=" col-span-3 lg:col-span-3  md:col-span-full flex w-full  justify-start items-center mb-4 ">
            </div>
            <div className=" order-2 md:order-1 col-span-3  justify-start flex flex-col gap-y-8">
                <Grid >
                    { cityTours.map((tour, i) => (
                    <Grid.Col  span={12}  key={i}>
                        <div  className={`flex flex-wrap gap-5 p-4 mx-14 md:mx-auto min-h-[200px] border-[1px] transition-all hover:border-pink-500 shadow-lg rounded-2xl  `}>
                        <div className="rounded-2xl  shrink-0 h-[200px] max-w-[340px] w-full  ">
                            <img src={urlFor(tour.imgUrl)} className=" rounded-2xl w-full h-full object-cover object-center" alt="" />
                        </div>
                        <div className=" flex flex-col gap-y-4 flex-1 justify-start items-start">
                            <div className="text-right font-bold text-pink-500 text-2xl capitalize tracking-wide">{tour.city}</div>
                            <div className="text-md text-gray-300">
                            <span className="font-semibold text-pink-700 text-lg">{tour.price}$</span> / Per person
                            </div>
                            <div className="tracking-widest leading-5  font-light  text-gray-400 line-clamp-2 ">{tour.description}</div>
                            <Link to={`/tour/${tour._id}`} className=" px-8 py-2  border-[1px] border-gray-300 rounded-md capitalize  transition-all duration-500 hover:bg-pink-500 hover:text-white hover:border-pink-400  hover:shadow-lg hover:shadow-pink-300 ">
                              See Details
                            </Link>
                        </div>
                        </div>

                    </Grid.Col>
                    ))
                    }
                </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToursByCity;
