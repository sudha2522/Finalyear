import React, { useState } from 'react'
import { isAuthenticated } from '../auth/helper';
import { updateProfile } from '../auth/helper/user';
import Base from './Base';
// import { updateProfile } from '../auth/helper/user';
import './update.css'

function UpdateProfile() {

    const [skill, setSkill] = useState('');
    const [project, setProject] = useState('');

    const { user, token } = isAuthenticated();
    const onSubmit = (event) => {
        console.log(`user ${user.email}`)
        event.preventDefault();
      
       
        //backend request
        updateProfile(user.email, token, { skill }).then((data) => {
          if (data.error) {
           console.log("error occured")
          } else {
            console.log("hogya occured")
            setSkill('');
          }
        });
        
      };
      // const onClick=(event)=>{
      //   event.preventDefault();
      //   await axios.get('http:updateProjects(user.email, token, { project}).then((data) => {
      //     if (data.error) {
      //      console.log("error occured")
      //     } else {
      //       console.log("hogya occured")
      //       setProject('');
      //     }
      //   });
      // }
  return (
    <Base>
    <div style={{marginTop:"80px"}}> 
        {/* <h1>Add Skill!</h1> */}
        <h1 style={{fontSize:"large"}}>Update Your Skill</h1>
        <input type="text" placeholder='Skill'  value={skill}
        onChange={(e) => setSkill(e.target.value)} marginBottom="10px"/>
        <button type="submit" onClick={onSubmit} className="signin1" marginBottom="10px">Add </button>
      
      {/* <h1 style={{fontSize:"large"}}>Update Your Porject</h1>
        <input type="text" placeholder='Add a Project'  value={project}
        onChange={(e) => setSkill(e.target.value)} marginBottom="10px"/>
        <button type="submit"  className="signin1" marginBottom="10px">Add </button> */}
      

       
</div>
</Base>
  )
}

export default UpdateProfile