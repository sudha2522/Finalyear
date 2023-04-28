import React from 'react'
import Base from './Base';
const Forum = () => {
    const forumWidgetURL = 'http://pub12.bravenet.com/forum/static/show.php?usernum=1014563337&frmid=11762&msgid=0';

    const iframeStyle = {
       width: '70vw',
        height:'100vh',
      border: 'none',
      marginTop:'20px'
    };
  return (
    <Base>
         {/* <div>
         <header style={{ marginTop:"35px",marginRight:"10px"}}>
        <h1>Forum</h1>
    </header>
         <iframe src={forumWidgetURL} style={iframeStyle}></iframe>
    </div> */}
    
    </Base>
  )
}

export default Forum
