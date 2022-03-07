import React, { useRef, useState } from "react";
import bg from "../assets/images/hero-bg-3.jpg";
import {ActionIcon, Checkbox, RangeSlider, TextInput} from "@mantine/core";
import {FaSearch} from "react-icons/fa";
import {FcFilledFilter} from "react-icons/fc"
import useSearch from "../Hooks/useSearch";
import {Grid } from '@mantine/core'
import {FiList, FiGrid} from'react-icons/fi'
import Pagination from "../components/Pagination";
import {XyzTransition} from "@animxyz/react";
import {useClickAway} from 'ahooks'
import {useMediaQuery} from "react-responsive";
import {urlFor} from "../client"
import { useTours } from "../contexts/ToursContext";
import { Link } from "react-router-dom";
import notFoundImage from '../assets/gifs/notfound.gif'
const Tours = () => {
    const {tours} = useTours()
    const [searchQuery, setSearchQuery] = useState('')
    const [isGrid, setIsGrid] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [isSideSearchOpen, setIsSideSearchOpen] = useState(false)
    const MatchedResult = useSearch(tours, searchQuery,'city')
    const isSideSearchRef = useRef() 
    const isMidScreen = useMediaQuery({query: "(min-width: 768px)"});
    const marks = [
      {value: 20, label: "20%"},
      {value: 50, label: "50%"},
      {value: 80, label: "80%"},
    ];
    useClickAway(()=>{
      setIsSideSearchOpen(false)
    }, isSideSearchRef)
    const handleSearch = (e)=>{
      const query = e.target.value
      setSearchQuery(query)
    }
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const postsPerPage = 4
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const pageMatchedResults = MatchedResult.slice(indexOfFirstPost, indexOfLastPost);



  return (
    <>
      <div className="bg-white  relative">
        <div className="relative  h-[340px] flex flex-col justify-center items-center  ">
          <img src={bg} className=" absolute object-cover object-center w-full h-full    " alt="" />
          <div className="text-center text-6xl font-playfair font-extrabold text-gray-100 z-10 ">Tours</div>
        </div>
            <div onClick={()=>setIsSideSearchOpen(!isSideSearchOpen)} className="cursor-pointer text-2xl lg:hidden block fixed right-0  bg-white shadow-xl p-2 z-10 border-[1px] translate-x-1 border-r-0 rounded-md  border-pink-500 ">
                    <FcFilledFilter />
            </div>
        <div className="container mt-8 mx-auto ">
          <div className="grid  lg:grid-cols-5 gap-2 relative ">
            <div className=" col-span-3 lg:col-span-3  md:col-span-full flex w-full  justify-start items-center mb-4 ">
                <div className=" text-2xl text-gray-900 font-semibold capitalize ">
                    Showing 1-{pageMatchedResults.length} of {MatchedResult.length} Tours
                </div>
                <div className="flex gap-4 ml-auto text-2xl   ">
                <ActionIcon onClick={()=>{setIsGrid(false)}} color="pink" size="lg" variant='light' >
                  <FiList/> 
                </ActionIcon>
                <ActionIcon onClick={()=>{setIsGrid(true)}} color="pink" size="lg" variant='light' >
                   <FiGrid/>
                </ActionIcon>
                </div>
            </div>
            <div className=" order-2 md:order-1 col-span-3  justify-start flex flex-col gap-y-8">
                <Grid >
                    {pageMatchedResults.map((tour, i) => (
                    <Grid.Col  span={(isGrid && isMidScreen) ? 6 : 12 }  key={i}>
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
                  {pageMatchedResults.length === 0 && (
                    <Grid.Col>
                      <>
                      <img src={notFoundImage} className='mx-auto w-[200px] ' alt="" />
                      <div className="text-center  capitalize font-light text-xl text-gray-800 ">No results found</div>

                      </>
                    </Grid.Col>
                  )}

                <Grid.Col span={12} sx={{display: 'flex', justifyContent: 'center', marginTop: "20px"}}>
                  <Pagination  activePage={currentPage} postsPerPage={postsPerPage} totalPosts={MatchedResult.length} paginate={paginate} />
                </Grid.Col>
                </Grid>
            </div>
            <XyzTransition xyz='fade right'>
              {
                (isSideSearchOpen || isMidScreen)  && (
                  <div ref={isSideSearchRef} className=" absolute bg-white/90 md:static right-0 -top-32 left-[100px] p-8 pt-14 md:p-0 md:bg-transparent lg:mx-20 col-span-3 lg:col-span-2   order-1 text-gray-800   md:-translate-y-32">

                  <div className="  lg:shadow-2xl border-t-4 border-pink-500 shadow-gray-300 bg-white p-4 py-10 mb-8 ">
                    <div className="text-xl font-semibold  text-gray-900 mb-2">Search Tours</div>
                    <p className="font-light text-sm text-gray-400 leading-4 tracking-wider mb-6">Lorem ipsum dolor sit amet</p>
                    <TextInput onChange={handleSearch} size="lg" rightSection={<FaSearch />} placeholder="Search Location" />
                  </div>
                  <div className="   lg:shadow-2xl border-t-4 border-pink-500 shadow-gray-300 bg-white p-4 py-10 mb-8 ">
                    <div className="text-xl font-semibold  text-gray-900 mb-2">Tours Categories</div>
                    <p className="font-light text-sm text-gray-400 leading-4 tracking-wider mb-6">Lorem ipsum dolor sit amet rye</p>
                    <div className="flex flex-col gap-y-4 ml-4">
                      <Checkbox label="Adventure Tours" color="pink" radius="xl" size="md" />
                      <Checkbox label="City Tours" color="pink" radius="xl" size="md" />
                      <Checkbox label="Single Tours" color="pink" radius="xl" size="md" />
                      <Checkbox label="Group Tours" color="pink" radius="xl" size="md" />
                    </div>
                  </div>
                  <div className="   lg:shadow-2xl border-t-4 border-pink-500 shadow-gray-300 bg-white p-4 py-10 mb-8 ">
                    <div className="text-xl font-semibold  text-gray-900 mb-2">Price Range</div>
                    <p className="font-light text-sm text-gray-400 leading-4 tracking-wider mb-6">Lorem ipsum dolor sit amet rye</p>
                    <RangeSlider defaultValue={[20, 80]} marks={marks} />
                  </div>
                  <div className="   lg:shadow-2xl border-t-4 border-pink-500 shadow-gray-300 bg-white p-4 py-10 mb-8 ">
                    <div className="text-xl font-semibold  text-gray-900 mb-2">Date Range</div>
                    <p className="font-light text-sm text-gray-400 leading-4 tracking-wider mb-6">Lorem ipsum dolor sit amet rye</p>
                    <div className="flex flex-col gap-y-4 ml-4">
                      <Checkbox label="1 - 3" color="pink" radius="xl" size="md" />
                      <Checkbox label="3 - 4" color="pink" radius="xl" size="md" />
                      <Checkbox label="4 - 5" color="pink" radius="xl" size="md" />
                      <Checkbox label="5 - Above" color="pink" radius="xl" size="md" />
                    </div>
                  </div>
                </div>
                )

              }
           </XyzTransition>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;
