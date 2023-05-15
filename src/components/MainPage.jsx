import React from 'react'
// import {Faculty} from './FacultyApi'
import Navbar from './Navbar';
import {useState} from 'react';
import Faculties from './Faculties';
import images from "./images";
import ImageSlider from "./ImageVideoSlider";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack
} from '@chakra-ui/react'
import {SimpleGrid} from '@chakra-ui/react'


import Base from './Base';
import NewsCard from './newscard';
import Events from './Events';
import Society from './Society';
import NewsEvents from './NewsEvents';
import Welcome from './welcome';
import ChairmanMsg from './chairmanmsg';

import VisionMission from './VisionMission';
import HodMsg from './Hodmsg';



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
