import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import Base from "./Base";
import axios from "axios";
import UploadFile from "./Upload";
import { Select } from '@chakra-ui/react';
import { isAuthenticated } from "../auth/helper";
function Files() {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const [fileUrl, setFileUrl] = useState(null);
    const [x,setX]=useState(false);

    const [fileType,setFiletype]=useState("All Files")
    

    const handleDownload = async (filename) => {
      
      try {
        const response = await axios.get(`http://localhost:3001/classroom/${id}/files/${filename}`, { responseType: 'blob' });
        const file = new Blob([response.data], { type: response.headers['content-type'] });
        const fileUrl = URL.createObjectURL(file);
        setFileUrl(fileUrl);
        // console.log("abdfhksdkfdjlfhisdghki")
        openFile(fileUrl)
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        fetchData();
      }, [x])
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/classroom/${id}/files`); // replace with your API endpoint
          setData(response.data);
   
          // console.log(dat);
        } catch (error) {
          console.log(error);
        }
      };
    //skill
    const [filterText2, setFilterTextss] = useState('');
    const [filteredData2, setFilteredDataaa] = useState([]);
          const handleFilterSubmit3 = (event) => {
            event.preventDefault();
            console.log(selectedValue+'------');
            const filter=data.filter((row)=>{
              // const myarr=row.skill.split(" ");
              //  console.log(data);
               console.log("uesgdjkbsdbvjd"+row.purpose)
               console.log(selectedValue)
               setFiletype(selectedValue)
              return row.purpose==selectedValue;
            })
            console.log(filter);
             setFilteredDataaa(filter);
             if(filter.length==0){
              alert('Not available')
             }
             console.log('Hello'+ filteredData2);
            
          };
          const handleFilterReset = () => {
            setFilterTextss('');
            setFilteredDataaa([]);
            setFiletype("All Files")
          };  
          const openFile = (url) => {
            window.open(url, "_blank");
          };
          const [selectedValue, setSelectedValue] = useState('Notes');

          const handleDropdownChange = (event) => {
            setSelectedValue(event.target.value);
          }

  return (
    <Base>
    
    <div style={{width:"100vw",display:"flex",marginTop:"50px"}}>

      <div  style={{width:"35%"}}>
      <div>
     <label>Search</label>
   </div>
   <Select id="dropdown" style={{width:"60%",height:"40px"}} onChange={handleDropdownChange} value={selectedValue}>
                     <option value="Notes">Notes</option>
                     <option value="qa">Question Paper</option>
                     <option value="assignment">assignment</option>
     </Select>
   <button type="submit" className="signin1" style={{ marginRight: "30px",marginTop:"20px" }} onClick={handleFilterSubmit3}>Search</button>
   
   <button type="button" onClick={handleFilterReset} style={{marginTop:"20px"}} className="signin1">
       Reset
     </button>
      {isAuthenticated() && <UploadFile xState2={{x,setX}} /> }
   
 

      </div>
    
  {/* <div style={{display:"inline-block"}}> */}
    {/* <div style={{fontSize:"2rem",fontWeight:"400",marginLeft:"40px"}}>{fileType}</div> */}
    <div className="file-list-container">
      
        {
          filteredData2.length>0?
          filteredData2.map((file, index) => (
            <div className="file-item" onClick={() =>handleDownload(file.name)} key={index}>
              <div className="file-icon">{file.type == "folder" ? <i className="fas fa-folder"></i> :<i class="fa-solid fa-file-pdf" style={{color:"red"}}></i>}</div>
              <div className="file-details">
                <div className="file-name" >{file.name}</div>
                <div className="file-info">
                  {file.type !== "folder" && (
                    <React.Fragment>
                      <div className="file-size">{file.size}</div>
                      <div className="file-size">{file.uploadedBy}</div>
    
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          )):
          data.map((file, index) => (
            <div className="file-item" onClick={() =>handleDownload(file.name)} key={index}>
              <div className="file-icon">{file.type === "folder" ? <i className="fas fa-folder"></i> :<i class="fa-solid fa-file-pdf" style={{color:"red"}}></i>}</div>
              <div className="file-details">
                <div className="file-name" >{file.name}</div>
                <div className="file-info">
                  {file.type !== "folder" && (
                    <React.Fragment>
                      <div className="file-size">{file.size}</div>
                      <div className="file-size">{file.uploadedBy}</div>
    
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          ))


    
              }
    </div>
    </div>    
    {/* </div> */}
    </Base>
    
  );
}
export default Files