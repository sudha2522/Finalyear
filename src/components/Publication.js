import React from 'react'
import Base from './Base';
import { useState } from 'react';
function Publication({ item }) {
    // const [active, setActive] = useState(false);
    // const toggleActive = (index) => {
    //   const faqElements = document.querySelectorAll('.faq');
    //   const element = faqElements[index];
    //   element.classList.toggle('active');
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
      setIsOpen(!isOpen);
    }
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleCollapsible1 = () => {
      setIsOpen1(!isOpen1);
    }
  return (
    <div>
     
      <div style={{width:"80vw",padding:"10px",margin:"10px",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
      <h1 className='xx' >{item.name}</h1>
       <div className={`faq ${isOpen ? 'active' : ''}`} >
          <h3 className="faq-title" style={{fontSize:"2rem",fontWeight:"600"}}>Conference Publications</h3>
          {isOpen && ( <div >
            <ul style={{display:"inline-block",textAlign:"left",fontSize:"1.9rem"}}>
            {item.Conference_Publications.map((items,index)=>{
              return<li key={index} style={{listStyleType: "disc"}}>{items}</li>
              // console.log(items);
            })}
            </ul>
            </div>)}
          <button className="faq-toggle" onClick={() => {toggleCollapsible()}}>
            <i className="fas fa-angle-down"></i>
          </button>
        </div>
        <div className={`faq ${isOpen1 ? 'active' : ''}`}>
          <h3 className="faq-title" style={{fontSize:"2rem",fontWeight:"600"}}>International Journal</h3>
          {isOpen1 && ( <div >
            <ul style={{display:"inline-block",textAlign:"left",fontSize:"1.9rem"}}>
            {item.International_journals.map((items,index)=>{
              return<li key={index} style={{listStyleType: "disc"}}>{items}</li>
              // console.log(items);
            })}
            </ul>
            </div>)}
          <button className="faq-toggle" onClick={() =>{toggleCollapsible1()}}>
            <i className="fas fa-angle-down"></i>
          </button>
        </div>

       
      </div>
    </div>
  )
}

export default Publication

