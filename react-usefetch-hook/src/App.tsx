import React, { useState } from 'react';
import { isTemplateExpression, isTemplateMiddle } from 'typescript';
import { useDebouncedCallback } from 'use-debounce';
import {useFetch} from './useFetch'


function App() {
   const[query, setQuery] = useState("");
   const debounced = useDebouncedCallback(
    // function
    (value) => {
      setQuery(value);
    },
    // delay in ms
    1000,
    {maxWait:1000}
  );
   const url =`https://api.github.com/search/users?q=${query || "masai"}`
   const {loading, data, error} = useFetch(url)
   console.log(loading, data)
  return (
    <>
     <div style={{width:"100%", height:"70px", backgroundColor:"black", display:"flex"}}>
      <img  style={{height:"40px", marginTop:"15px", marginLeft:"20px", borderRadius:"50%"}}  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.C0It0Y9-HXIu_ieBD9beNwAAAA%26pid%3DApi&f=1"/>

      <input  value={query} onChange={(e)=>debounced(e.target.value)} style={{marginLeft:"40%", height:"30px", marginTop:"15px",width:"300px"}} />
    
    </div>
    <div>
      {loading && "loading..."}
      {!loading && data &&  data.items.map((item:any) => <div key={item.id}> {item.login}</div>)}


    </div>
     
    </>
   
  );
}

export default App;
