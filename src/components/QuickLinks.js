import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const QuickLinks = () => {
const navigate=useNavigate();
  return (
    <div style={{border:"solid 1px rgb(219, 218, 218)",borderRadius:"10px",width:"70%",marginLeft:"20%",textAligh:"left"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:"500",padding:"10px 0px",color:"white",backgroundColor:"rgb(8, 39, 65)" ,borderRadius:"10px 10px 0px 0px",}}>
        QuickLinks
      </h1>
      <div className="linkitems">
      <NavLink exact to="https://hib.iiit-bh.ac.in/m-ums-2.0/start/login/?client=" 
                               >
                                M.ums 2.0
                            </NavLink>
      </div>
      {/* <div className="linkitems">
        Faculty Profile
      </div> */}
      <div className="linkitems">
      <NavLink to='/Faculties'>
                                Faculty Profile
                            </NavLink>
      </div>
       
      <div className="linkitems">
      <NavLink exact to="https://iiit-placement-website-v2.vercel.app/"
                               >
                                  Placement Web Portal
                            </NavLink>
      
      </div>
      <div className="linkitems">
      <NavLink exact to="https://iiit-bh.almaconnect.com/alumni?frm=main_menu"
                               >
                                  Alumni Details
                            </NavLink>
      </div>
      <div className="linkitems">
      <NavLink exact to="http://vlabs.iitkgp.ac.in/vlt/project.html"
                               >
                                   IIT KGP VLab 
                            </NavLink>
       
      </div>
      <div className="linkitems">
      <NavLink exact to="https://gate.iitk.ac.in/">
                                  GATE
                            </NavLink>
      </div>
     
    </div>
  )
}

export default QuickLinks