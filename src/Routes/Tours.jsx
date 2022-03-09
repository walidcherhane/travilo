import React, { useRef, useState } from "react";
import bg from "../assets/images/hero-bg-3.jpg";
import {Grid, ActionIcon} from "@mantine/core";
import {FcFilledFilter} from "react-icons/fc"
import useSearch from "../Hooks/useSearch";
import {FiList, FiGrid} from'react-icons/fi'
import Pagination from "../components/Pagination";
import {useClickAway} from 'ahooks'
import {useMediaQuery} from "react-responsive";
import {urlFor} from "../client"
import { useTours } from "../contexts/ToursContext";
import { Link } from "react-router-dom";
import notFoundImage from '../assets/gifs/notfound.gif'
import Search from "../components/Search";

const Tours = () => {
    const {tours} = useTours()
    const [searchQuery, setSearchQuery] = useState('')
    const MatchedResult = useSearch(tours, searchQuery,'city')
    const [isGrid, setIsGrid] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [isSideSearchOpen, setIsSideSearchOpen] = useState(false)
    const sideSearchRef = useRef() 
    const isMidScreen = useMediaQuery({query: "(min-width: 768px)"});

    useClickAway(()=>{
      setIsSideSearchOpen(false)
    }, sideSearchRef)

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
              <Search handleSearch={handleSearch} isOpen={isSideSearchOpen} refer={sideSearchRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;
