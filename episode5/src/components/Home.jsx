import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data,isLoading,isError,refetch } = useQuery({queryKey:["cat"],queryFn:()=>
  {
    return axios.get('https://catfact.ninja/fact').then((res)=>res.data)
  }
  });
  return (
    <div>
      {isLoading&&<h1>Loading...</h1>}
      {isError&&<h1>Sorry ,there was an error</h1>}
      <h1>This is the homepage</h1>
      <h1>{data?.fact}</h1>
      <button onClick={refetch}>Update Data</button>
    </div>
  );
};

export default Home;
