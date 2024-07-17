import React, { useState } from "react";
import axios from "axios";

const GenerateAnExcuse = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const partyExcuses = async () => {
    await axios
      .get(`https://excuser-three.vercel.app/v1/excuse/party/?id=${1}`)
      .then((res) => setData1(res.data[0].excuse));
    console.log(data1);
    
  };
  const officeExcuses= async()=>
  {
await axios.get(`https://excuser-three.vercel.app/v1/excuse/office/?id=${1}`)
.then((res)=>setData2(res.data[0].excuse));
console.log(data2);
  }
  const familyExcuses=async()=>
  {
await axios.get(`https://excuser-three.vercel.app/v1/excuse/family/?id=${1}`)
.then((res)=>setData3(res.data[0].excuse))
console.log(data3);

  }


  return (
    <div>
      <h1>Generate An Excuse</h1>
      <button onClick={partyExcuses}>Party</button>

      <h1>{data1}</h1>
      <button onClick={officeExcuses}>Office</button>
      <h1>{data2}</h1>
      <button onClick={familyExcuses}>Family</button>
      <h1>{data3}</h1>
    </div>
  );
};

export default GenerateAnExcuse;
