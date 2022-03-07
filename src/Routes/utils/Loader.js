import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {XyzTransition} from "@animxyz/react";
import {   BallTriangle } from 'react-loader-spinner'
export default function Loader({children}) {
    const location = useLocation()
    const [loading, setLoading] = useState()
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
      }, [location.pathname]
    )
      return (
      <>
        <XyzTransition xyz='fade' >
            {loading && (
                     <div className="bg-gray-100 flex justify-center items-center w-full h-screen fixed   z-[100]    ">
                        <BallTriangle color="#BE185D" height={80} width={80}  />
                     </div>
            )}
        </XyzTransition>
         {!loading && children}
      </>
  )
}
