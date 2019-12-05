import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    circleOut1: {
        stroke: '#31BCB1',
        // fill: 'none',
        strokeWidth: '0.4',
        // '&:hover': {
        // fill: '#31BCB1'
        // }
    },
    circleOut2: {
        stroke: '#16534E',
        fill: 'none',
        strokeWidth: '0.3',

    },
    text: {
        fill: '#fff',
        fontSize: 4,
        fontWeight: 700,
        fontFamily: 'Muli'
    },

})

const Circle = ({fill, hover, cx, cy, valuesR, durR, valuesCy, durCy, out, text, textX, textY}) => {
  const classes = useStyles();

  return (
      <g>
        <circle
        style={{ fill: !out && hover ? '#31BCB1': 'none'}}
        cx={cx || "70"} className={out ? classes.circleOut2: classes.circleOut1}>
            <animate attributeName="r" fill={fill || "freeze"} values={valuesR || "30; 35; 30"} dur={durR || "2s"} repeatCount="indefinite"/>
            <animate attributeName="cy" values={valuesCy || "180; 182; 185; 182; 180"} dur={durCy || "3s"} repeatCount="indefinite"/>
        </circle>
        {text && <text x={cx} y={cy} textAnchor="middle" className={classes.text}>{text}</text>}
      </g>

  );
}

export default Circle;
