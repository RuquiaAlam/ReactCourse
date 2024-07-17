import React, { useEffect, useState } from 'react'

const FetchAPI = () => {

    const [dataAPI,setDataAPI]=useState("")
     

        useEffect(()=>
        {

const fetchData = async () => {
  const data = await fetch("https://catfact.ninja/fact");
  const res = await data.json();
  console.log(res.fact);
  setDataAPI(res.fact);
};
fetchData();
        },[])


  return (
    <div>
      <h1>{dataAPI}</h1>
    </div>
  );
}

export default FetchAPI