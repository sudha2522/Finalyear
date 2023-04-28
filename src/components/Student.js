import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Base from './Base';
import { Table, Button, Modal } from 'react-bootstrap';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Input,InputGroup,InputLeftElement} from '@chakra-ui/react'
import { PhoneIcon,SearchIcon } from "@chakra-ui/icons";
const Student = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/user/alluser'); // replace with your API endpoint
      setData(response.data);
      setData1(data);
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  };
  //id
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  //name
  const [filterText1, setFilterTexts] = useState('');
  const [filteredData1, setFilteredData1] = useState([]);
//skill
  const [filterText2, setFilterText2] = useState('');
  const [filteredData2, setFilteredData2] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  //   const [d, setD] = useState({
  //     classId:'',
  //     name: '',
  //   email: '',
  //   skill:[],
  //   projects: [],
  //   experience: [],
  // role:0});

  const [showModal, setShowModal] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skill, setSkill] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [collgeId, setCollegid] = useState('');
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  const handleClick = async (email1) => {
    console.log(`http://localhost:3001/user/${email1}`);
    const response = await axios.get(`http://localhost:3001/user/${email1}`);
    // setDs(response.data);
    console.log(response.data);
    const { collegId, name, email, skill, projects, experience } = response.data;
    setCollegid(collegId);
    setName(name);
    setEmail(email);
    setSkill(skill);
    setProjects(projects);
    setExperience(experience);
    // console.log(localStorage.getItem('jwt'))
    const response1 = await axios.get(`http://localhost:3001/student/${email}/projects`);
    setData2(response1.data);
    console.log("projects--" + data2);
    const response2 = await axios.get(`http://localhost:3001/student/${email}/experience`);
    setData3(response2.data);
    console.log("projects----" + data3);

    //  console.log(classId)
    //  setD({classId,name,email,skill,projects,experience});
    //   console.log('hellooooo'+d.name);

    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
  };
  //const jsonData = JSON.stringify(data);

  const handleFilterSubmit =async (event) => {
    event.preventDefault();
    console.log(filterText);
    try {
      const response = await axios.get(`http://localhost:3001/student/id/${filterText}`); // replace with your API endpoint
      setData1(response.data);
      setFilteredData1(response.data);
    
      console.log(response.data);
  } catch (error) {
      console.log(error);
  }

  };
  const handleFilterSubmit2 = async(event) => {
    event.preventDefault();
    console.log(filterText1);

    try {
      const response = await axios.get(`http://localhost:3001/student/${filterText1}`); // replace with your API endpoint
      setData(response.data);
      setFilteredData1(response.data);
    
      console.log(response.data);
  } catch (error) {
      console.log(error);
  }


  };
  // const handleFilterSubmit3 = (event) => {
  //   event.preventDefault();
  //   console.log(filterText2);
  //   const filter=data.filter((row)=>{
  //     const myarr=row.skill.split(",");
  //     console.log(myarr);


  //     return row.skill.toLowerCase()==filterText2 || (row.skill==filterText2)||(row.skill.toUpperCase()==filterText2)
  //     ||(myarr[0].toLowerCase()==filterText2.toLowerCase())||(myarr[myarr.length-1].toUpperCase()==filterText2.toUpperCase());
  //   })
  //   console.log(filter);
  //    setFilteredData2(filter);
  //    if(filter.length==0){
  //     alert('Not available')
  //    }
  //    console.log(`ssdbkjbcdsb ${filteredData2.length}`);



  // };
  const handleFilterReset = () => {
    setFilterText('');
    setFilteredData([]);

    setFilterTexts('');
    setFilteredData1([]);

     setFilterText2('');
    setFilteredData2([]);

  };
  return (

    <Base>
    <div>
    <div style={{ marginLeft:"35px" ,fontSize:"4rem",width:"90vw",fontWeight:"500",margin:"15px 40px",textAlign:"left"}}>Search Students</div>
    </div>
      <div style={{display:"flex",justifyContent:"space-between",width:"80+vw"}}>
        {/* <input type="text" placeholder='College Id'  value={filterText} */}
          {/* onChange={(e) => setFilterText(e.target.value)} style={{ marginTop:"50px",marginRight:"10px",textAlign:"left",paddingLeft:"30px"}} /> */}
        {/* <button type="submit" style={{marginTop:"50px",marginRight:"60px" }} className='signin1' onClick={handleFilterSubmit} >Search </button> */}
        <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='tel' style={{width:"20vw",height:"5vh"}} placeholder='College Id' onChange={async(e) =>{ setFilterText(e.target.value);
       const response= await axios.get(`http://localhost:3001/student/id/${filterText}`) // replace with your API endpoint
       // setData1(response.data);
       console.log("hii"+response.data);
        setFilteredData(response.data);
        console.log(filteredData);
      
       // console.log(response.data);
    }} />
  </InputGroup>
        {/* <input type="text" placeholder='Name'  value={filterText1} style={{ marginTop:"50px",marginRight:"10px",paddingLeft:"30px",textAlign:"left"}}onChange={(e) => setFilterTexts(e.target.value)} />
        <button type="submit" style={{ marginTop:"50px",marginRight:"10px" }} className="signin1" onClick={handleFilterSubmit2} >Search</button> */}
       <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='tel' style={{width:"20vw",height:"5vh"}} placeholder='Student Name' onChange={async(e) =>{ setFilterTexts(e.target.value);
       const response= await axios.get(`http://localhost:3001/student/${filterText1}`) // replace with your API endpoint
       // setData1(response.data);
      //  console.log("hii"+response.data);
        setFilteredData1(response.data);
        // console.log(filteredData);
      
       // console.log(response.data);
    }} />
  </InputGroup>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='tel' style={{width:"20vw",height:"5vh"}} placeholder='Type Skill...' onChange={async(e) =>{ setFilterText2(e.target.value);
       const response= await axios.get(`http://localhost:3001/student/sk/${filterText2}`) // replace with your API endpoint
       // setData1(response.data);
      //  console.log("hii"+response.data);
        setFilteredData2(response.data);
        // console.log(filteredData);
      
       // console.log(response.data);
    }} />
  </InputGroup>
      </div>
      <div> <button type="button" onClick={handleFilterReset} className="signin2">
        Reset
      </button></div>

      <div style={{ width: "100%" }}>
        <table class="table" style={{ width: "100%", border: "solid black 1px" }}>
          <thead>
            <tr style={{ backgroundColor: "rgb(132, 8, 25)", color: 'white' }}>
              <th className="centered-text">ID</th>
              <th className="centered-text">Name</th>
              {/* <th className="centered-text">Skill</th> */}
            </tr>
          </thead>
          <tbody>

            {
              filteredData.length > 0 ? filteredData.map((row) => (
                <tr key={row._id} onClick={() => handleClick(row.email)}>
                  <td>{row.collegeId}</td>
                  <td>{row.name}</td>
                  {/* <td>{row.email}</td> */}
                  {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}

                </tr>
              )) : (filteredData1.length > 0 ? filteredData1.map((row) => (
                <tr key={row._id} onClick={() => handleClick(row.email)}>
                  <td>{row.collegeId}</td>
                  <td>{row.name}</td>
                  {/* <td>{ds.data.email}</td> */}
                  {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}

                </tr>
              )) : (filteredData2.length>0?filteredData2.map((row)=>(
                <tr key={row._id} onClick={() => handleClick(row.email)}>
                  <td>{row.collegeId}</td>
                  <td>{row.name}</td>
                  {/* <td>{ds.data.email}</td> */}
                  {/* <td>{ row.skill.map((skill)=>(<span>{skill},</span>))}</td> */}

                </tr>
                )):""))
            }
          </tbody>
        </table>
      </div>
      {showDetails && (
      
        <div className="modal-overlay">
          <div className='modal-container'>
            <span className="modal-close" onClick={handleClose}>
              &times;
            </span>
            <div className='modal-title'>
              Student Details
            </div>
            <div className="resume">

              <h1 className="name" style={{ textAlign: "center" }}>{name}</h1>
              <p className="email" style={{ textAlign: "center" }}>{email}</p>
              <h2 className='section-title'>Skills</h2>
              <div>
              <ol>
                {skill.map((project,index) => (
                  <li key={index} style={{listStyle:"decimal",fontSize:"1.5rem",margin:"20px",textAlign:"left"}}>
                    <div className="project" key={index}>
                      <h1 style={{textAlign:"left"}}>{project}</h1>
                    
                    </div>
                  </li>

                ))}
                  </ol>
              </div>
              
              <h2 className="section-title">Projects</h2>
              
              <ol>
                {data2.map((project,index) => (
                  <li key={index} style={{listStyle:"decimal",fontSize:"1.5rem",margin:"20px",textAlign:"left"}}>
                    <div className="project" key={project.name}>
                      <h1 className="project-title" style={{textAlign:"left"}}>{project.name}</h1>
                      <p className="project-description" style={{textAlign:"left"}}>{project.description}</p>
                    
                    </div>
                  </li>

                ))}
                  </ol>

              {/* </ol> */}


              <h2 className="section-title">Experience</h2>
              <ol>
              {data3.map((exp,index) => (
                <li key={index} style={{listStyle:"decimal",fontSize:"1.5rem",margin:"20px",textAlign:"left"}}>
                <div className="experience" key={exp.name}>
                  <h3 className="experience-company" style={{textAlign:"left"}}>{exp.name}</h3>
                  <h1 className="experience-description" style={{textAlign:"left"}}>{exp.description}</h1>
                  <p className="experience-role" style={{textAlign:"left"}}>Role: {exp.role}</p>
                </div>
                </li>
              ))}
              </ol>
              
            </div>
          </div>


        </div>
      )}
    </Base>

  )
}

export default Student