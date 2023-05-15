import React from 'react'
import Base from './Base'
import './contact.css'
// import GoogleMapReact from 'google-map-react';
// const Marker = ({ text }) => <div>{text}</div>;
const Contact = () => {
  
  return (
    <Base>
    <div className="contact-container">
      <div className="contact-address">
        <h2>Contact Us</h2>
        <p>
        Department of Computer Science Engineering,GITA Bhubaneswar, Badarghunathpur<br />
          PO: MADANPUR<br />
          Bhubaneswar<br />
          Odisha - 751012<br />
          India
        </p>
      </div>
      <div className="contact-map">
        <h2>GITA BBSR Location Map</h2>
        <iframe title="GITA BBSR Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.4964321766097!2d85.71996517369003!3d20.23823621446324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9ac65b76c7d%3A0x91f0f4d506f7c20b!2sGITA%20Autonomous%20College%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1683395844916!5m2!1sen!2sin" 
        width="600" height="200" style={{border:0}} allowfullscreen="" loading="lazy" 
        ></iframe>
        {/* <iframe
          title="IIIT BBSR Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.873323675491!2d85.10109111440845!3d20.29534828639605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19aafa097e685b%3A0xb8a61f6f89d6a2d6!2sIIIT%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1645481428155!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}
      </div>
      </div>
    </Base>
  )
}

export default Contact
