import React from 'react'

const Welcome = () => {
    return (
        <div style={{marginBottom:"30px"}}>
            <div style={
                {
                    marginLeft: "35px",
                    fontSize: "4rem",
                    fontWeight: "500",
                    margin: "10px 90px",
                    textAlign: "left",
                    // borderBottom: "3px solid yellow",
                    marginBottom:"30px",
                    // width:"13%"
                }
            }>

                Welcome
            </div>
            <div style={
                {
                    display: "flex",
                    padding: "0px 90px",
                    justifyContent: "space-between"
                }
            }>
                <div style={
                    {
                        width: "60%",
                        textAlign: "left"
                    }
                }>


                    <p style={
                        {fontSize: "2rem",lineHeight:"40px"}
                    }>
                        The Department of Electrical Engineering (EE) at IIT Hyderabad offers a vibrant environment for under graduate, post graduate education and research in many areas of Electrical Engineering. We are a team of 32 faculty (28 fulltime + 4 visiting), 476 students (192 BTech, 122 MTech and 162 PhD) and 4 staff members engaged in cutting edge research and teaching in several frontier areas of Electrical Engineering.
                    </p>

                </div>
                <div style={
                    {
                        width: "30%",
                        height: "300px"
                    }
                }>

                    <img  style={
                    {
                        // width: "280px",
                        height: "280px"
                    }} src="https://ee.iith.ac.in/images/website2.jpg"/>

                </div>
            </div>
        </div>

    )
}

export default Welcome
