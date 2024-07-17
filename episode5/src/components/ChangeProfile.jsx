import React from 'react'
import {useState,useContext} from "react"
import { AppContext } from '../App';

const ChangeProfile = () => {

    const[newUsername,setNewUserName]=useState("");
    const{setUserName}=useContext(AppContext)

    const handleChange=(e)=>
    {
setNewUserName(e.target.value);
    }
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={() => setUserName(newUsername)}>
        Change Username
      </button>
     
    </div>
  );
}

export default ChangeProfile