import { Stack } from '@chakra-ui/react'
import React from 'react'
import Events from './Events'
import NewsCard from './newscard'
import { productData, responsive } from "./NApi";
import QuickLinks from './QuickLinks';

function NewsEvents() {

  return (
    <div id='newsevents' class="root" style={{backgroundColor:'white',padding:"0px 90px"}} >
      <Stack
        spacing={1}
        direction={['column', 'column', 'row']} // Change direction to column on small screens and row on larger screens
        style={{
          padding: "30px 0px",
          width: '100%',
        }}
      >
        <div style={{ width:"70%"}}>
          <div style={{fontSize: '2.5rem', textAlign: 'left',fontWeight:"600" ,marginBottom:"20px"}}>
          Announcements/News/Highlights
          </div>
          <div style={{overflow:"hidden"}}><Events/></div>
        </div>
        <div style={{ width:"30%",overflow:"hidden"}}><QuickLinks/> </div>
        
      </Stack>
    </div>
  )
}

export default NewsEvents
