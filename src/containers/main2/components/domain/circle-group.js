import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Circle from "./circle";

const useStyles = makeStyles({
    group: {
        backgroundColor: 'green'
    }
})

const CircleGroup = ({text,cy,cx, valuesROut, valuesCy, valuesRIn, durR, durCyOut, durCyIn}) => {
    const classes = useStyles();
    const [hover, setHover] = useState(false);
    const onMouseOver = () => {
        setHover(!hover)
    }
    // const onMouseOut = () => {
    //     setHover(false)
    // }
  
    return (
        <svg
        onMouseOver={onMouseOver} 
        // onMouseOut={onMouseOut} 
        className={classes.group}
        >

            <g>
                <Circle
                    out
                    cx={cx}
                    valuesR={valuesROut || "28; 33; 28"}
                    durR={durR || "3s"}
                    valuesCy={valuesCy}
                    durCy={durCyOut || "4.1s"}
                />
                <Circle
                    valuesR={valuesRIn || "22; 27; 22"}
                    cx={cx}
                    cy={cy}
                    durR={durR || "3s"}
                    valuesCy={valuesCy}
                    durCy={durCyIn || "4"}
                    text={text}
                    hover={hover}
                />
            </g>
        </svg>
 
    );
}

export default CircleGroup;
