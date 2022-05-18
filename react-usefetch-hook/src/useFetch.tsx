import { useState, useEffect } from "react"

 export  const useFetch=(url:string)=>{
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<null | any>(null);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(err => {
          setError(true);
          setLoading(false);
        });
    }, [url]);
  
    return {
      loading,
      data,
      error
    };

   
 }