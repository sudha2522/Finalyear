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
                        Widely appreciated as a royal department of GITA , the department of computer science & Engineering was established in 2004 with an initial intake of 60 seats and subsequently increased to 120 seats in 2009. The department strives to imbibe cutting-edge skills through research and development, industrial consultancy and high quality teaching.
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
                    }} src="welcome.avif"/>

                </div>
            </div>
        </div>

    )
}

export default Welcome
