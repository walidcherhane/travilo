import { useEffect, useState } from "react"

const useSearch = (data ,query , searchBy) => {
    const [filteredData, setFilteredData] = useState([]) 

    useEffect(()=>{
        const matchedData = ()=>{
            let filteredData = []
            if (query.length <= 0){
                return data
            } else {
                data.forEach((item)=>{
                    if(
                        item[searchBy]?.toLowerCase().includes(query.toLowerCase()) 
                    ){
                        filteredData.push(item);
                    }
                })
                return filteredData;
            }
        };
        return setFilteredData(matchedData)
    }, [query, data,searchBy])
    return filteredData
}
export default useSearch