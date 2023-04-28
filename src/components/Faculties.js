import React from 'react'
import { useState ,useEffect} from 'react';
import axios from "axios";
import Base from './Base';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
// import ComponentOne from './ComponentOne';
// import { Button, ButtonGroup } from '@chakra-ui/react'
// import './collapse.css';
import { useNavigate } from 'react-router-dom';
import {Imghelper } from '../auth/helper/admin';
const Faculties = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const navigate=useNavigate()
  const handleClose = () => {
    setShowDetails(false);
  };
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/faculty/facultys'); // replace with your API endpoint
      setData(response.data);
      setData1(data);
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const moredetails=async(email)=>{
    setShowDetails(true);

    
    navigate(`/Faculty/${email}`)

  }
  
  const openfile=()=>{
    const {url}=data1;
    console.log(url)
    window.location.href=url;
  }
  return (
    <Base>
    <div style={{textAlign:"center" }}>
      <div style={{ marginLeft:"35px" ,fontSize:"4rem",width:"90vw",fontWeight:"500",margin:"15px 40px",textAlign:"left"}}>Faculty Members</div>
       <div className='main-cardd'>
      {
        data.map((curElem)=>{
          // const {batch,name,email,profession,image}=curElem;
            const {name,profession,email,description,image,url,qualification}=curElem;
            const imageUrl = Imghelper(curElem);
            return (
              <div>
              <div className="card">
          
          <div className="card-body">
          <div style={{width:"50%"}}>
          <img  src={imageUrl} onClick={()=> window.location.href =url} />
          </div>
            <div style={{ marginLeft:"20px" ,fontSize:"1.3rem"}}>
            <h2 style={{ textAlign:"left",marginBottom:"14px"}}>{name}</h2>
            <div style={{ fontSize:"1.5rem"}}>Profession: {profession}</div>
            <div style={{ fontSize:"1.5rem"}}>Qualification: {qualification}</div>
            <div style={{ fontSize:"1.5rem"}}><p>Email:  {email}</p></div>
            <Button style={{ fontSize:"1.8rem" ,padding:"20px" ,textAlign:"right",marginTop:"10px"}} colorScheme='teal' variant='outline' onClick={()=>moredetails(email)}>
    More Details
  </Button>
            </div>
          
          </div>
        </div>
        </div>);
       
      }
      
        )}
    
    </div>
    </div>
    </Base>
    
  )
}
export default Faculties






