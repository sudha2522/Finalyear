import React from 'react'

const HodMsg = () => {
    return (
        <div style={
            {marginBottom: "30px"}
        }>
            <div style={
                {
                    marginLeft: "35px",
                    fontSize: "3rem",
                    fontWeight: "500",
                    margin: "10px 90px",
                    textAlign: "left",
                    // borderBottom: "3px solid yellow",
                    marginBottom: "30px"
                }
            }>

Message From Head of the Department
            </div>
            <div style={
                {
                    display: "flex",
                    padding: "0px 90px",
                    //  justifyContent: "space-between",
                    margin:"auto",
                    width:"90%"
                }
            }>
                <div style={
                    {
                        width: "30%",
                        height: "300px",
                        textAlign:"end"
                    }
                }>

                    <img style={
                            { // width: "280px",
                        textAlign:"center",

                                height: "300px",
                          borderRadius:"50px"

                            }
                        }
                        src="	http://localhost:3001/faculty/image/642ee8e8986cec83158c8551"/>

                </div>
                <div style={
                    {
                        width: "70%",
                        textAlign: "left"
                    }
                }>


                    <p style={
                        {
                            fontSize: "1.5rem",
                            lineHeight: "30px",
                            fontFamily: "Montserrat , sans-serif",
                            fontStyle:"italic",
                            color:"black",
                            fontWeight:"300"

                        }
                    }>
                        {/* The Department of Electrical Engineering (EE) at IIT Hyderabad offers a vibrant environment for under graduate, post graduate education and research in many areas of Electrical Engineering. We are a team of 32 faculty (28 fulltime + 4 visiting), 476 students (192 BTech, 122 MTech and 162 PhD) and 4 staff members engaged in cutting edge research and teaching in several frontier areas of Electrical Engineering. */}
                    <p style={{fontSize: "1.5rem",
                            lineHeight: "30px",
                            fontFamily: "Montserrat , sans-serif",
                            fontStyle:"italic",
                            color:"black",
                            fontWeight:"900"}}> Welcome to the Department of Electronics and Telecommunication, IIIT Bhubaneswar.</p>  
                        
                        Our department takes pride in educating tomorrow’s visionaries, Tech professionals and researchers in frontier areas of computer science. With the support of an established teaching and research framework, it has been possible to establish a strong technical foundation among the students in Computer Science, Engineering and allied frontier research areas.
                        
                        B.Tech students of this department are offered professional and open electives, besides core courses.
                    </p>
                    <div style={
                {
                    fontSize: "1.5rem",
                    lineHeight: "30px",
                    fontFamily: "Montserrat , sans-serif",
                    fontStyle:"italic",
                    color:"black",
                    fontWeight:"900"
                    
                }}>
                    Dr. RAJAT KUMAR GIRI,IIIT Bhubaneswar
                    </div>

                </div>

            </div>
        </div>

    )
}

export default HodMsg
