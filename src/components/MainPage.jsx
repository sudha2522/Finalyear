import React from 'react'
// import {Faculty} from './FacultyApi'


import Base from './Base';

import NewsEvents from './NewsEvents';
import Welcome from './welcome';
import ChairmanMsg from './chairmanmsg';

import VisionMission from './VisionMission';
import HodMsg from './HodMsg';



const MainPage = () => {

    return (
        <Base>
            <div className='mainpage'>
                


                {/* <NewsEvents/>
                 */}
                 <Welcome/>
                 <ChairmanMsg/>
                 <HodMsg/>
                 {/* <HodMsg/> */}
                 {/* <HodMsg1/> */}
                 <VisionMission/>
                 <NewsEvents/>
                {/* <Society/> */}
                

            </div>


        </Base>
    )
}

export default MainPage
