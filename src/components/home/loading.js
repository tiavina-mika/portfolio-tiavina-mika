import React from "react";
import clsx from "clsx";
import { makeStyles, darken } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Buttons from "./loading/buttons";
import Gradients from "./loading/gradients";
import Image from "./loading/image";
import AnimatedCircles from "./loading/animated-circles";

const useStyles = makeStyles({
    circleIn: {
      fill: "url(#gradientIn)",
      strokeWidth: 10
    },
    circleInStart: {
      stroke: "#ff3f3f",
    },
    circleInEnd: {
      stroke: "#4dd300",
    },
    circleOutAnimatedOffset: {
      fill: 'none',
    },
    circleInBorder: {
      fill: "none",
      stroke: "black",
      strokeWidth: 2
    },
    circleOutCompleted: {
      fill: 'url(#gradientOutCompleted)',
    },
    circleInBorderActive: {
      animation: '$setBorderCircle 2s linear infinite forwards',
    },
    circleInBorderCompleted: {
      stroke: darken('#4dd300', 1),
    },
    count: {
      fill: '#777777',
      fontSize: 15,
      fontWeight: 700,
      fontFamily: 'Arial'
    },
    icon: {
      color: '#fff',
      fontSize: 25
    },
    buttonActive: {
      fill: '#fff'
    },
    '@keyframes setBorderCircle': {
      '100%': {
        stroke: darken('#fff', 0.6)
    },
  },
});

const Loading = ({ countUp, pauseResume, start, paused }) => {
    const classes = useStyles();

    return (
        <Box
            bgcolor="#000" 
            height="100vh" 
            display="flex"
            justifyContent="center" 
            alignItems="center" 
            flexDirection="column"
        >
            <svg width="300" height="300" viewBox="0, 0, 300, 300">
                <Gradients />
                <g>
                    { countUp < 100
                        ? <AnimatedCircles countUp={countUp} />
                        : <circle cx={150} cy={150} r={130}
                            className={clsx(
                                classes.circleOut,
                                countUp < 100 ? classes.circleOutActive: classes.circleOutCompleted
                            )}
                        /> 
                    } 
                    <circle cx={150}  cy={150} r={106}
                        className={clsx(
                            classes.circleInBorder, 
                            countUp < 100? classes.circleInBorderActive: classes.circleInBorderCompleted
                        )} 
                    />
                    <circle cx={150} cy={150} r={100}
                        className={clsx(
                            classes.circleIn, 
                            countUp < 100 ? classes.circleInStart: classes.circleInEnd
                        )}
                    />
                    { countUp < 100
                        ?   <Image pauseResume={pauseResume} paused={paused} />
                        :   <g transform="translate(125, 125)">
                                <path fill="#fff" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"/>
                            </g>
                    }
                    <text 
                        x={155}
                        y={200}
                        className={classes.count}
                        strokeWidth="2px"
                        textAnchor="middle"
                        alignmentBaseline="middle">
                        {countUp}%
                    </text>
                    <circle cx={150} cy={150} r={95}
                        className={clsx(
                            classes.circleInBorder, 
                            countUp < 100? classes.circleInBorderActive: ''
                        )} 
                    />
                </g>
            </svg>
        <Buttons onPause={pauseResume} paused={paused} start={start} countUp={countUp}/>
    </Box>
  );
};

export default Loading;
