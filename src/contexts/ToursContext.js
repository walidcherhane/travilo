import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../client";

const ToursContext = createContext()
export function useTours  (){
   return useContext(ToursContext)
}

export function ToursProvider ({children}){
  const [tours, setTours] = useState([]);
  const allToursQuery = '*[_type == "tours"]';

  const getCityTours = (city) =>{
    return  tours.filter((tour)=> (tour.city === city))
  }

  const ToursByCity = [
      {Marrakech: getCityTours('Marrakech')},
      {Tangier: getCityTours('Tangier')},
      {Merzouga: getCityTours('Merzouga')},
      {Agadir: getCityTours('Agadir')},
      {Ouarzazate: getCityTours('Ouarzazate')},
      {Fez: getCityTours('Fez')},
      {Casablanca: getCityTours('Casablanca')}
  ]

  useEffect(()=>{
    const fetchTours = ()=>{

      client.fetch(allToursQuery).then((data)=>{
        setTours(data)
      }).catch((error)=>{console.log(error)});
    }
         return fetchTours()
    }, [])

    const values = {tours, ToursByCity, getCityTours}
     return (
         <ToursContext.Provider value={values} >
             {children}
         </ToursContext.Provider>
     )
}