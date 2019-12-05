import React from 'react';
import  Box from '@material-ui/core/Box';
import Header from '../components/body/header';
import About from '../components/body/about';
import Domain from '../components/body/domain-container';

const Body = ({ onClick, open }) => {
    return (
      <Box display={open ? 'block': 'none'}>
          <Header onClick={onClick} open={open}/>
          <About open={open}/>
          <Domain />
          {/* <Doing /> */}
      </Box>
  );
}

export default Body;
