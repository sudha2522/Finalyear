import React from "react";
import Base from "./Base";

const Labo = () => {
  // Array to store lab subjects
  const labSubjects = [
    "C Programming Lab",
    "Data Structure Lab",
    "Object Oriented Programming Lab (C++)",
    "Database Engineering Lab",
    "DAA Lab",
    "Computer Networking Lab",
    "Computer Organization Lab",
    "Operating System Lab",
    "Java Lab",
    "Software Engineering Lab",
  ];

  return (
    <Base>
   <div style={{ marginLeft:"35px" ,fontSize:"4rem",width:"90vw",fontWeight:"500",margin:"15px 40px",textAlign:"left"}}>Laboratory facilities</div>
      <div style={{width:"80vw",padding:"10px",margin:"10px",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
      
      
        {labSubjects.map((subject,index)=>( 
        <div key={index} className={`faq`}>
          <h3 className="faq-title">{subject}</h3>
          <p className="faq-text" style={{textAlign:"left",fontSize:"1.9rem"}}>
          {subject}
          </p>
        </div>))}

      </div>
    </Base>
  );
};

export default Labo;
