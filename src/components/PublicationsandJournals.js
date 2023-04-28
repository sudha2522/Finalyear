import React, { useState, useEffect } from 'react';
import { Faculty } from './publicationApi';
import Publication from './Publication';
import './publish.css'
import Base from './Base';
function PublicationsandJournals() {

const [active, setActive] = useState(false);
    const toggleActive = (index) => {
      const faqElements = document.querySelectorAll('.faq');
      const element = faqElements[index];
      element.classList.toggle('active');
    };
  return (
    <Base>
     <div >
         <div style={{ marginLeft:"35px" ,fontSize:"4rem",width:"90vw",fontWeight:"500",margin:"15px 40px",textAlign:"left"}}>Publications</div>
         <div className='main-cardd' style={{textAlign:"center",justifyContent:"center"}}>
         <div  className="grid-column" id="column1">{Faculty.map((item, index) => {
            
                return(
                    <Publication  item={item}/>
                    )
            
        
        })}</div>
       

         
     
         </div>
       
    </div></Base>
   
  );
        };

export default PublicationsandJournals;

