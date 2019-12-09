import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from 'framer-motion';
import clsx from 'clsx';

const useStyles = makeStyles({
    circleIn: {
        stroke: '#31BCB1',
        fill: 'transparent',
        strokeWidth: 0.3
    },
    circleOut: {
        stroke: '#16534E',
        fill: 'transparent',
        strokeWidth: '0.3',
    },
    text: {
        fill: '#fff',
        fontSize: 4,
        fontWeight: 700,
        fontFamily: 'Muli'
    },
    description: {
        fill: '#fff',
        fontSize: 3,
        // fontWeight: 700,
        fontFamily: 'Muli',
    },   
    circleInClicked: {
        fill: '#31BCB1',
        stroke: '#0B2926',
        strokeWidth: 10,
    },
    circleInHovered: {
        fill: '#31BCB1',
        stroke: '#0B2926',
        strokeWidth: 5,
    },   
    circleOutHovered: {
        fill: 'red',
        stroke: 'none',
        // strokeWidth: 5,
    },   
    
})

const Circle = ({cx, cy, valuesR, durR, valuesCy, durCy, out, text, description}) => {
    const [isClicked, setClicked] = React.useState(false);
    const [isHovered, setHovered] = React.useState(false);
    const classes = useStyles();

    const onClick = () => setClicked(!isClicked);
    const onHover = () => setHovered(true);
    const onHoverOut = () => setHovered(false);

    const animate = { 
        cy: [...valuesCy], 
        r: isClicked ? valuesR.map(r => r * 2): isHovered ? valuesR.map(r => r * 1.4): valuesR };
    const duration = {
        r: { duration: durR, yoyo: Infinity,   ease: 'linear'},
        cy: { duration: durCy, yoyo: Infinity,   ease: 'linear'},
    };
    
    return (
        <g>
            <motion.circle
                cx={cx || "70"} 
                cy={valuesCy[0]}
                className={ out
                    ? classes.circleOut
                    : clsx(
                        classes.circleIn, 
                        isClicked ? classes.circleInClicked: '',
                        isHovered ? classes.circleInHovered: '',
                    )
                }
                animate={animate}
                transition={duration}
                whileTap={!out && onClick}
                onMouseEnter={!out && onHover}
                onMouseOut={!out && onHoverOut}
            />
            { !out && <text x={cx} y={isClicked ? cy / 1.1: cy} textAnchor="middle" className={classes.text}>{text}</text>}
            
            { description && isClicked && 
                <text x={ cx} y={cy * 1.1} height="100" textAnchor="middle" className={classes.description}>
                    <tspan x={cx} y={cy}>{description.slice(0, 50)}</tspan>       
                </text> }
        </g>   
    );
}

export default Circle;
