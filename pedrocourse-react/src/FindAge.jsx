import React, { useRef, useState } from 'react'
import axios from "axios"

const FindAge = () => {

    const[name,setName]=useState("")

    const[predictedData,setPredictedData]=useState(null);
  
const fetchData= async()=>
{

await axios
  .get(`https://api.agify.io/?name=${name}`)
  .then((res)  => setPredictedData(res.data))
  console.log(predictedData);

}
    const handleChange=(e)=>
    {
      
        setName(e.target.value);
        console.log(name)
    }
  return (
    <div>
      <h1>Predicted Age</h1>
      <input placeholder="Example Pedro..." onChange={handleChange} />
      <button onClick={fetchData}>Predict Age</button>
      <h1>{predictedData?.name}</h1>
      <h1>{predictedData?.age}</h1>
      <h1>{predictedData?.count}</h1>
    </div>
  );
}

export default FindAge