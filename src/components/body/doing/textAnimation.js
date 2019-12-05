import React, { useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextLoop from "react-text-loop";
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '155%',
        textJustify: 'center',
        zIndex: 30,
    },
    titleContainer: {
        // position: 'absolute',
        // top: '155%',
        // // textJustify: 'center',
        // zIndex: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'SofiaPro-Bold',
        color: '#fff',
        fontSize: 135,
    },
    activeTitle: {
        color: '#01cfcf'
    },
    textLoop: {
        width: 780,
    }
})

const TextAnimation = () => {
    const classes = useStyles();
    const [active, set] = useState(false);

    useEffect(() => {
        set(!active)
    }, [])

    const props = useSpring({ dy: active ? 100: 0})
    return (
    <div className={classes.root}>
            <svg width="100%" height="100" >
                <motion.text x="0" y="80" style={{color: 'green', fontSize: 52}}>Ceci est <motion.tspan dy={20} animate={{ dy: [0, 100]}}>un</motion.tspan> test</motion.text>
            </svg>
    </div>

    )
  }
  
  export default TextAnimation;