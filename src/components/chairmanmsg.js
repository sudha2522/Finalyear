import React from 'react'

const ChairmanMsg = () => {
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

Message From The Chairman
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
                        src="image.png"/>

                </div>
                <div style={
                    {
                        width: "70%",
                        textAlign: "left"
                    }
                }>


                  
                        {/* The Department of Electrical Engineering (EE) at IIT Hyderabad offers a vibrant environment for under graduate, post graduate education and research in many areas of Electrical Engineering. We are a team of 32 faculty (28 fulltime + 4 visiting), 476 students (192 BTech, 122 MTech and 162 PhD) and 4 staff members engaged in cutting edge research and teaching in several frontier areas of Electrical Engineering. */}
                    <p style={{fontSize: "1.5rem",
                            lineHeight: "30px",
                            fontFamily: "Montserrat , sans-serif",
                            fontStyle:"italic",
                            color:"black",
                            fontWeight:"900"}}> The difference between the dreamer and innovator is that a dreamer just dreams and an innovator creates his own path to realize ideas which others think as impossible. That streak of originality is the distinct quality that makes Dr. Satya Prakash Panda, Chairman, Gandhi Group as the brightest star of education horizon of Eastern India.</p>  
                    
                    <div style={
                {
                    fontSize: "1.5rem",
                    lineHeight: "30px",
                    fontFamily: "Montserrat , sans-serif",
                    fontStyle:"italic",
                    color:"black",
                    fontWeight:"900"
                    
                }}>
                    Dr. SATYA PRAKASH PANDA,GITA Bhubaneswar
                    </div>

                </div>

            </div>
        </div>

    )
}

export default ChairmanMsg
