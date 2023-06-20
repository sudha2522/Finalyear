import React from 'react'

function NewsEvents() {

  return (
    <div id='newsevents' class="root" style={{backgroundColor:'white',padding:"0px 90px"}} >
    {/* <iframe
        width="560"
        height="1000"
        src={`https://www.youtube.com/embed/5L4hJjQdJ8c`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5L4hJjQdJ8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default NewsEvents
