import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footers from './Footers';
import Navbar from './Navbar';
import ImageSlider from './ImageVideoSlider';

const Base = ({ children }) => {
  return (
    <Box>
      <Navbar/>
      <ImageSlider />
      <Box p={8} minH={'100vh'} style={{display:'inline-block',justifyContent:"center"}} padding={'5vh 0px 0px 0px'} overflowX={'hidden'}>
        {children}
      </Box>
      <Footers></Footers>
    </Box>
  );
};

export default Base;