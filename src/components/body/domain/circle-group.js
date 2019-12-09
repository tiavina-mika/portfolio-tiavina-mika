import React from "react";
import Circle from "./circle";

const CircleGroup = ({ text, description, cy, cx, valuesROut, valuesCy, valuesRIn, durR, durCyOut, durCyIn }) => {
    return (
        <svg>
            <g>
                <Circle
                    out
                    cx={cx}
                    valuesR={valuesROut || [28, 33, 28]}
                    durR={durR || "3"}
                    valuesCy={valuesCy}
                    durCy={durCyOut || "4.1"}
                />
                <Circle
                    valuesR={valuesRIn || [22, 27, 22]}
                    cx={cx}
                    cy={cy}
                    durR={durR || "3"}
                    valuesCy={valuesCy}
                    durCy={durCyIn || "4"}
                    text={text}
                    description={description}
                />
            </g>
        </svg>
    );
}

export default CircleGroup;
