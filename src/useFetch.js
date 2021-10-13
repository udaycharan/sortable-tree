import { useState, useEffect } from "react";
import axios from "axios";



function useFetch(url) {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(
        ()=>{
  
           setLoading(true);

             axios.get(url)
             .then((response => {
                //  console.log(response.data);
                setData(response.data);

                })).catch((err)=> setError(err))
                .finally(()=> setLoading(false));   
        },[url]);
        

        const setTreeData = (data)=>{

            return setData(data);

        }


       

        return [data, isLoading, error, setTreeData];
    
}

export default useFetch;