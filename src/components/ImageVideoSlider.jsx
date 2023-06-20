import React, { useEffect, useState } from "react";
// import "./codepen.css"
// import VisionMission from "./VisionMission";
import "./codepen.css"

const ImageSlider = () => {
  
 

  return (
    <div  className ="home" style={{backgorundColor:"black",marginTop:"28px",width:"98.5vw",overflowX:"hidden",overflowY:"hidden",display:"flex",justifyContent:"center",marginTop:"15vh" }}>
      <div className="cascade-slider_container" style={{height:"70vh"}} id="cascade-slider">
        <img className="imageee" src="cor1.png" alt="" />
        <div className="cascade-slider_slides">
        <h1 className="h1style">Department Of Computer Science and Engineering </h1>
        {/* <div className="h1style"> <VisionMission/></div> */}
       
        
         <div>
         {/* {images.map((image, index) => (
            <div
              key={image.id}
              className={`cascade-slider_item ${
                index === currentIndex ? "now" : ""
              } ${
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === images.length - 1)
                  ? "prev"
                  : ""
              } ${
                index === currentIndex + 1 ||
                (currentIndex === images.length - 1 && index === 0)
                  ? "next"
                  : ""
              }`}
            >
              <img className="cimage" src={image.src} alt={image.alt} />
            </div>
          ))} */}
         </div>
        
        </div>

        {/* <ol className="cascade-slider_nav">
          {images.map((image, index) => (
            <li
              key={image.id}
              className={`cascade-slider_dot ${
                index === currentIndex ? "cur" : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></li>
          ))}
        </ol> */}


  
    </div>

    </div>
  );
};

export default ImageSlider;
