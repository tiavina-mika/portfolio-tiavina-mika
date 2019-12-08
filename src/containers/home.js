import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Text from '../components/home/content';
import Stars from '../components/home/stars';
import Button from '../components/home/button';

const useStyles = makeStyles({
    container: {
        // backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor:' #24292e',
        backgroundImage: `linear-gradient(#191c20, #24292e 15%)`,
        backgroundPosition: 'left top',
        height: '100vh',
        overflow: 'hidden'
    },
});


const Home = ({ onClick, open }) => {
    const classes = useStyles();

    return (
        // <div className={classes.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} style={{display: open ? 'none': 'block'}}>
        <Box height="100vh" style={{display: open ? 'none': 'block', background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)"}} overflow="hidden">
            <Stars />
            <Button onClick={onClick}/>
            {/* <Box>
                <svg width="800" height="800" style={{backgroundColor: 'green'}}>
                    <motion.circle
                        cx={500}
                        r={100}
                        style={{fill: 'red', stroke: 'yellow'}}
                        animate={{ cx: [null, 100, 200] }}
                
                transition={{ duration: 3, times: [0, 0.2, 1], loop: Infinity, }}
                        />
                </svg>
            </Box> */}
            <Text />
        </Box>
    );
}

export default Home;
