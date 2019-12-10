import React, { useState } from 'react';
import  Box from '@material-ui/core/Box';
import Header from '../components/body/header';
import About from '../components/body/about';
import Domain from '../components/body/domain-container';
import Spinner from '../components/body/spinner-on-wheel';

const Body = ({ onClick, open }) => {
  const [active, setActive] = useState(0)
  const onWheel = e => {
    const { deltaY } = e;

    if (deltaY > 0) {
      active < 284 ? setActive(active + 10): setActive(284);
    } else {
      active > -284 ? setActive(active - 10): setActive(284);
    }
  }
    return (
      <Box display={open ? 'block': 'none'} onWheel={onWheel}>
          <Header onClick={onClick} open={open}/>
          <Box position="fixed" width={90} height={90} right={10} top={100}>
            <Spinner onWheel={onWheel} active={active} />
        </Box>
          <About open={open}/>
          <Domain />
          {/* <Doing /> */}
      </Box>
  );
}

export default Body;
