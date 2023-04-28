import React, { useEffect } from 'react'
import './research.css'
import Base from './Base'
import { useState } from 'react';
import axios from 'axios';
function Research() {
  const [data,setData]=useState([]);
useEffect(async()=>{
  try {
    const response = await axios.get('http://localhost:3001/research/researchs'); // replace with your API endpoint
    setData(response.data);
  
    console.log(response.data);
} catch (error) {
    console.log(error);
}
},[])

  return (
    <Base>
        <div >
<div style={{ marginLeft:"35px" ,fontSize:"4rem",width:"90vw",fontWeight:"500",margin:"15px 40px",textAlign:"left"}}>Research Scholars</div>
  <table >
    <tbody>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>SuperVisor</th>
        <th>Area</th>
        <th>Year of Joining</th>
        
     </tr>
    {data.map((row) => (
                <tr key={row._id}>
                  <td>{row.name}</td>
                  <td>{row.category}</td>
                  <td>{row.supervisor}</td>
                  <td>{row.area}</td>
                  <td>{row.yoj}</td>
                </tr>
              ))
    }
    </tbody>
  </table>
 
</div>

    </Base>
  )
}

export default Research
