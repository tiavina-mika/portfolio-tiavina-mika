import React from 'react'
import { useTrail, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';

// import './styles.css'

const useStyles = makeStyles({
    main: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        filter: "url('#goo')",
        overflow: 'hidden',
        '& svg': {
            display: 'none'
        },
        '& > div': {
            position: 'absolute',
            willChange: 'transform',
            borderRadius: '50%',
            background: 'lightcoral',
            boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
            opacity: 0.6,  
        },
        '& > div:nth-child(1)': {
            width: 120,
            height: 120,
        },
        '& > div:nth-child(2)': {
            width: 250,
            height: 250,
        },
        '& > div:nth-child(3)': {
            width: 150,
            height: 150,
        },
        '& > div::after': {
            content: '',
            position: 'absolute',
            top: 20,
            left: 20,
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.8)',
        },
        '& > div:nth-child(2)::after': {
            top: 70,
            left: 70,
            width: 70,
            height: 70,
        },
        '& > div:nth-child(3)::after': {
            top: 50,
            left: 50,
            width: 50,
            height: 50,
        },
        
    }
})

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const Balloon = () => {
    const classes = useStyles();
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
    React.useEffect(() => {
        set({
        xy: [400, 236] })
    })
    return (
        <>
        <svg style={{ position: 'absolute', width: 0, height: 0}}>
            <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
            <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
            </filter>
        </svg>
        <div className={classes.main} onMouseMove={e => set({xy: [e.clientX, e.clientY] })}>
            {trail.map((props, index) => (
            <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
            ))}
        </div>
        </>
    )
}

export default Balloon;
