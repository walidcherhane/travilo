import React, {useEffect, useState} from "react";
import {AiOutlineFieldTime} from "react-icons/ai";
import {VscTypeHierarchy} from "react-icons/vsc";
import {IoLanguage} from "react-icons/io5";
import {Link, useParams} from "react-router-dom";
import {FiPhoneCall, FiMoreVertical} from "react-icons/fi";
import {AiOutlineMail} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs";
import {useTours} from "../contexts/ToursContext";
import isEmpty from "validator/es/lib/isEmpty";
import {urlFor} from "../client";
import Error_404 from "../components/Error_404";

function SingleTour() {
  const {tours} = useTours();
  const {id} = useParams();
  const [tour, setTour] = useState([]);
  useEffect(() => {
    const tour = tours.find((tour) => tour._id === id);
    if(!tour) return;
    setTour(tour);
  }, [id, tours]);

  return (
    <>
      {tour?.description ? (
        <>
          <div className="relative  h-[340px] flex flex-col justify-center items-center  ">
            <img src={tour?.imgUrl && urlFor(tour.imgUrl)} className="  object-cover object-center  absolute inset-0  w-full h-full " alt="" />
            <div className="text-center text-5xl drop-shadow-md  font-extrabold text-gray-100 z-10 capitalize">{tour?.title}</div>
          </div>
          <div className="container mx-auto ">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-8 px-2">
              <div className="  pr-0   pt-0 lg:pl-20  col-span-3 flex flex-col gap-4">
                <div className="text-gray-800 text-start ">
                  <ul className="flex justify-between items-start  border-[1px] mt-4 border-transparent  border-b-gray-400 w-full ">
                    <li className="flex  justify-center items-center text-2xl ">
                      <div className="text-4xl text-pink-500">
                        <AiOutlineFieldTime />
                      </div>
                      <div className="p-2">
                        <div className="text-lg text-pink-400 font-bold">Duration</div>
                        <p className="font-semibold text-gray-500 text-sm">{tour?.duration} days</p>
                      </div>
                    </li>
                    <li className="flex  justify-center items-center text-2xl ">
                      <div className="text-4xl text-pink-500">
                        <VscTypeHierarchy />
                      </div>
                      <div className="p-2">
                        <div className="text-lg text-pink-400 font-bold">Type</div>
                        <p className="font-semibold text-gray-500 text-sm capitalize">{tour?.tourType?.map((type) => type + ", ") || "General tour"}</p>
                      </div>
                    </li>
                    <li className="flex  justify-center items-center text-2xl ">
                      <div className="text-4xl text-pink-500">
                        <IoLanguage />
                      </div>
                      <div className="p-2">
                        <div className="text-lg text-pink-400 font-bold">Languages</div>
                        <p className="font-semibold text-gray-500 text-sm">English & Spanish</p>
                      </div>
                    </li>
                  </ul>
                  <h1 className="font-semibold text-2xl capitalize mt-4"> Tour description </h1>
                  <p className="text-gray-500 mt-4 text-sm font-light ">{tour?.description} </p>
                  {tour?.details && <h1 className="font-semibold text-2xl capitalize mt-4"> Details: </h1>}
                  {tour?.details
                    ?.split("Day")
                    .filter((i) => !isEmpty(i, {ignore_whitespace: true}))
                    .map((t, i) => {
                      return (
                        <div>
                          <div className="flex gap-4 mt-8 ">
                            <div className=" border-r-pink-400 p-4 lg:border-2 border-transparent ">
                              <div className=" text-pink-500  p-4  leading-4   rounded-full mx-auto mb-2  w-[50px] h-[50px] border-dashed border-[1px] border-pink-500 text-center text-lg font-bold ">
                                {i + 1}
                              </div>
                            </div>
                            <div className="col-span-2 ml-4 ">
                              <div className="font-semibold text-lg text-pink-500 capitalize">Day {t.split("|")[0]}</div>
                              <div className="text-sm mt-2 font-light tracking-wide ">{t.split("|")[1]}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <Link to="/tours" className="bg-pink-500 text-white flex items-center gap-4 p-4 text-center mx-auto w-fit  font-semibold mb-2 mt-8 capitalize rounded-full">
                  view other tours
                  <FiMoreVertical />
                </Link>
              </div>

              <div className="  bg-white/90  mx-auto   p-8 pt-14 md:p-0 md:bg-transparent lg:mx-20  col-span-full lg:col-span-2     text-gray-800   ">
                <div className="  lg:shadow-2xl border-t-4 border-pink-500 shadow-gray-300 bg-white p-4 py-10 mb-8  ">
                  <Link to="/contact" className=" bg-pink-500 text-white block p-4 text-center  text-xl font-bold mb-2 uppercase">
                    book this tour
                  </Link>
                  <Link to="/contact" className="border-2 border-pink-500 text-pink-500 block p-4 text-center  text-xl font-bold mb-2 uppercase">
                    Ask a question
                  </Link>

                  <div className="mt-8 font-bold text-2xl text-center text-pink-500">Contact Us</div>
                  <ul className="mt-8 flex px-8 flex-col gap-4">
                    <li className="flex gap-4  justify-start  items-center text-xl ">
                      <FiPhoneCall />
                      +21283383029
                    </li>
                    <li className="flex gap-4  justify-start  items-center text-xl ">
                      <AiOutlineMail />
                      help@travilo.com
                    </li>
                    <li className="flex gap-4  justify-start  items-center text-xl ">
                      <BsWhatsapp />
                      +21283332443
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Error_404 />
      )}
    </>
  );
}

export default SingleTour;
