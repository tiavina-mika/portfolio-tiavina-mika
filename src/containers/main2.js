import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './main2.css';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

const useStyles = makeStyles({
  container: {
    // backgroundImage: `url(${process.env.PUBLIC_URL}/star-bg.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor:' #24292e',
    // background: `url(${process.env.PUBLIC_URL}/images/planet.png) no-repeat right top`,
    // backgroundSize: 150,
    backgroundImage: `linear-gradient(#191c20, #24292e 15%)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top',
    height: window.innerHeight,
    overflow: 'hidden'
    // backgroundPosition: 'center 0, 0 0, 0 '
  },
  planetContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  planet: {
    // backgroundImage: `url(${process.env.PUBLIC_URL}/star-bg.png)`,
    // backgroundPosition: 'center',
    background: `url(${process.env.PUBLIC_URL}/images/planet.png) no-repeat right top`,
    backgroundSize: 550,
    // backgroundImage: `url(${process.env.PUBLIC_URL}/star-bg.png),linear-gradient(#191c20, #24292e 15%)`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'left top',
    // height: window.innerHeight
    height: 400,
    width: 555,
    marginTop: '10%',
    // animation: '$rotatePlanet 100s linear infinite running'

    // backgroundPosition: 'center 0, 0 0, 0 '
  },
  nameContainer: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0, 
      color: '#FFF',
      textAlign: 'center',
      // fontFamily: 'lato',
      fontFamily: ['lato','sans-serif'].join(','),
      fontWeight: 300,
      fontSize: '50px',
      letterSpacing: '10px',
      
      marginTop: '-60px',
      paddingLeft: '10px'
    },
    name: {
      background: '-webkit-linear-gradient(white, #38495a)',
      backgroundClip: 'text',
      color: 'transparent',
    },
    postContainer: {
      position: 'absolute',
      top: '45%',
      left: 0,
      right: 0, 
      color: '#FFF',
      textAlign: 'center',
      // fontFamily: 'lato',
      fontWeight: 300,
      fontSize: '50px',
      letterSpacing: '10px',
      
      marginTop: '-60px',
      paddingLeft: '10px'
    },
    post: {
      fontFamily: ['Calibri','sans-serif'].join(','),
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
});

function getRandomIntInclusive(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
function getBoxShadow(value) {
  return 
}

function Main2() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const props2 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  },{ config: { duration: 11250 } });
  const props3 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 600,
  },{ config: { duration: 111250 } });
  
    const classes = useStyles();
    const colors = ['red', 'green', 'violet', 'violet-2', 'yellow', 'red-round', 'orange'];
    const fullColors = Array(3).fill(4)
  return (
    <div className={classes.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        {[...colors, ...colors, ...colors, ...colors, ...colors, ...colors ].map(n => (
          <animated.div style={{
            background: `url(${process.env.PUBLIC_URL}/images/stars-${n}.png) right top`,
            backgroundSize: 'cover',
            // backgroundImage: `url(${process.env.PUBLIC_URL}/star-bg.png),linear-gradient(#191c20, #24292e 15%)`,
            backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'left top',
            // height: window.innerHeight,
            position: 'relative',
            height: 8,
            width: 8,
            top: getRandomIntInclusive(window.innerHeight),
            left: getRandomIntInclusive(window.innerWidth),
            // marginTop: '10%'      
          }}
            className={classes.stars} />
        ))}
        {/* <div className={classes.planetContainer}>
          <div className={classes.planet}>
          </div>
        </div> */}
        <div className={classes.planetContainer} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div className={classes.planet} style={{ transform: props.xy.interpolate(trans1) }} />
         </div>
        <div className={classes.nameContainer}>
            <animated.h1 className="name name1" style={props2}>
              Tiavina Michael
            </animated.h1>
            <animated.h1  className="name name2" style={props3}>
              RALAINIRINA
            </animated.h1 >     
        </div>
        <div className={classes.postContainer}>
          <Typography variant="h3" className={classes.post}>
            Full-Stack Web/mobile Developer
          </Typography>
        </div>
    </div>
  );
}

export default Main2;
