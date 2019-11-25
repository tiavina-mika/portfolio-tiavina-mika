import React from 'react';
import { makeStyles, lighten, darken } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { motion } from "framer-motion";
import './main1.css';
import { useSpring, animated } from 'react-spring';
import Names from './components/names';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const useStyles = makeStyles({
  container: {
    // backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor:' #24292e',
    backgroundImage: `linear-gradient(#191c20, #24292e 15%)`,
    backgroundPosition: 'left top',
    height: window.innerHeight,
    overflow: 'hidden'
  },
  planetContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  planet: {
    background: `url(${process.env.PUBLIC_URL}/images/planet.png) no-repeat right top`,
    backgroundSize: 550,
    height: 400,
    width: 555,
    marginTop: '10%',
  },
  nameContainer: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0, 
      color: '#FFF',
      fontFamily: ['lato','sans-serif'].join(','),
      fontWeight: 300,
      fontSize: '50px',
      letterSpacing: '10px',
      display: 'flex',
      justifyContent: 'center',
      
      marginTop: '-60px',
      paddingLeft: '10px'
    },
    name: {
      background: '-webkit-linear-gradient(white, #38495a)',
      backgroundClip: 'text',
    },
    postContainer: {
      position: 'absolute',
      top: '45%',
      left: 0,
      right: 0, 
      color: '#FFF',
      textAlign: 'center',
      fontWeight: 300,
      fontSize: '50px',
      letterSpacing: '10px',
      marginTop: '-10px',
      paddingLeft: '10px'
    },
    post: {
      fontFamily: ['Montserrat','sans-serif'].join(','),
      fontSize: 40,
    },
    '@keyframes animStar': {
      from: {transform: 'translateY(0px)'},
      to: {transform: `translateY(${window.innerHeight / 3}px)`}
    },
    stars: {
      animation: '$animStar 80s linear infinite running'
    },
    '@keyframes rotatePlanet': {
      from: {transform: 'rotateY(0deg) translateX(0)'},
      to: {transform: `rotateY(-360deg)  translateX(200px)`}
    },
    arrowContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 60,
    },
    arrow: {
      borderRadius: '50%',
      animation: '$container 2s linear infinite running',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    arrowIcon: {
      fontSize: 50,
      animation: '$arrowanimation 2s linear infinite running'
    },
    arrowIcon2: {
      marginTop: -40,
    },
    line: {
      height: 7,
      backgroundColor: '#fff',
      width: 100,
      marginTop: 20,
      marginBottom: 85,
      borderRadius: 5
    },
    '@keyframes container': {
      from: {border: `5px solid ${darken('#1dd1aa', 0.8)}`, boxShadow: '1px 1px 1px transparent, -1px -1px 1px transparent'},
      to: {border: `5px solid ${lighten('#1dd1aa', 0.6)}`, boxShadow: `1px 1px 3px ${lighten('#1dd1aa', 0.9)}, -1px -1px 3px ${lighten('#1dd1aa', 0.9)}`}
    },
    '@keyframes arrowanimation': {
      from: {color: `${darken('#1dd1aa', 0.8)}`},
      to: {color: `${lighten('#1dd1aa', 0.6)}`}
    },
});

const getRandomIntInclusive = max=> {
  return Math.floor(Math.random() * Math.floor(max))
}

const Main2 = ({onClick}) => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

  
    const classes = useStyles();
    const colors = ['red', 'green', 'violet', 'violet-2', 'yellow', 'red-round', 'orange'];
  return (
    <div className={classes.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        {[...colors, ...colors, ...colors, ...colors, ...colors, ...colors ].map(n => (
          <animated.div style={{
            background: `url(${process.env.PUBLIC_URL}/images/stars-${n}.png) right top`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            height: 8,
            width: 8,
            top: getRandomIntInclusive(window.innerHeight),
            left: getRandomIntInclusive(window.innerWidth),
          }}
            className={classes.stars} />
        ))}

        <div className={classes.planetContainer} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div className={classes.planet} style={{ transform: props.xy.interpolate(trans1) }} />
         </div>
         <div className={classes.nameContainer}>
            <Names />
        </div>
        <div className={classes.postContainer}>
          <motion.div
            className={classes.line}
            initial={{ marginLeft: -5000 }}
            animate={{ marginLeft: '48%' }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          />
          <motion.div
            initial={{ marginLeft: -5000 }}
            animate={{ marginLeft: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
          <Typography variant="h3" className={classes.post}>
            Full-Stack Web/mobile Developer
          </Typography>
          </motion.div>

          <motion.div
            onClick={onClick}
            animate={{ marginTop: 10 }}
            transition={{
              yoyo: Infinity,
              duration: 0.5,
              ease: "easeInOut"
            }}
            className={classes.arrowContainer}
          >
              <Box className={classes.arrow} display="flex" flexDirection="column" alignItems="center" px={1}>
                  <KeyboardArrowDownIcon className={classes.arrowIcon} />
                  <KeyboardArrowDownIcon className={clsx(classes.arrowIcon, classes.arrowIcon2)} /> 
              </Box>              
          </motion.div>
        </div>
    </div>
  );
}

export default Main2;
