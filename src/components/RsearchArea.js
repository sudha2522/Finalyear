import React, { useState } from "react";
import Base from "./Base";
import "./researchArea.css";


function RsearchArea() {
  const labSubjects = [
    "Research supervisor for guiding Ph.D candidates",
    "Editorial Board Member in International / National Journals.",
    "Reviewer in various reputed International Journals and Books.",
    "Technical Advisory Committee Members for International / National Conferences.",
    "Published Text Books",
  ];

  return (
    <Base>
      <div
        style={{
          marginLeft: "35px",
          fontSize: "4rem",
          width: "90vw",
          fontWeight: "500",
          margin: "15px 40px",
          textAlign: "left",
        }}
      >
        Research Areas
      </div>
      <div style={{ color: "black", margin: "10px  90px 50px 90px" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            textAlign: "left",
            fontWeight: "600",
            margin: "10px 0px",
            color: "black",
          }}
        >
          Research groups & Labs
        </h1>
        <ul
          style={{
            color: "grey",
            textAlign: "left",
            fontSize: "1.6rem",
            fontStyle: "italic",
            fontWeight: "700",
            padding: "0px 20px",
            display:"flex",
            flexDirection:"column",
            borderLeft: "solid 3px rgba(210, 215, 217, 0.75)",
          }}
        >
          <div className={`faq`}>
            <h3 className="faq-title"> Software Testing Research Group</h3>
          </div>
          <div className={`faq`}>
            <h3 className="faq-title">Evolutionary and Fuzzy Research Group</h3>
          </div>
        </ul>

        <h1
          style={{
            fontSize: "2.5rem",
            textAlign: "left",
            fontWeight: "600",
            margin: "10px 0px",
            color: "black",
          }}
        >
          Honors and remarkable achievements of our faculty
        </h1>
        <ul
          style={{
            color: "grey",
            textAlign: "left",
            fontSize: "1.6rem",
            fontStyle: "italic",
            fontWeight: "700",
            padding: "0px 20px",
            display:"flex",
            flexDirection:"column",
            borderLeft: "solid 3px rgba(210, 215, 217, 0.75)",
          }}
        >
          {labSubjects.map((subject, index) => (
            <div key={index} className={`faq`} style={{width:"100%"}}>
              <h3 className="faq-title">{subject}</h3>
            </div>
          ))}

          <br></br>
        </ul>
      </div>
    </Base>
  );
}

export default RsearchArea;
