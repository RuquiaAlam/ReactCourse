import { useEffect, useMemo } from 'react';
import { useState } from 'react'
import axios from "axios"
import {useRef} from "react";
import fakeData from "./MOCK_DATA.json"
import {useTable} from "react-table"
import * as React from "react"

function App() {

console.log(fakeData);

const data=useMemo(()=>fakeData,[]);
const columns = useMemo(() => [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },

  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "University",
    accessor: "university",
  },
],[]);


const{getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=useTable({columns,data});


  return (
    <div className="App">
      <h1>React Table</h1>
      <div className="container">
       
<table {...getTableProps()}>
  <thead>
    {
      headerGroups.map((headerGroup)=>
      (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column)=>
          <th {...column.getHeaderProps()}>{column.render("Header")}</th>)}
        </tr>
      ))
    }
  </thead>
  <tbody {...getTableBodyProps()}>

    {
      rows.map((row)=>
      {
        prepareRow(row);

        return(
          <tr {...row.getRowProps()}>
{row.cells.map((cell)=>(
  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
))}
          </tr>
        )
      })
    }
  </tbody>
</table>
      </div>
    </div>
  );
}

export default App
