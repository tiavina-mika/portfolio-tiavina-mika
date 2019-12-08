import React from 'react';
import { makeStyles, lighten } from '@material-ui/core/styles';

const useStyles = makeStyles({
    line: {
        stroke: lighten('#38495a', 0.3),
        strokeLinecap: 'round',
        strokeWidth: 10
    }
});

const Line = () => {
    const classes = useStyles();
    return (
        <g>
            <line y1="200" y2="200" className={classes.line} >
                <animate attributeName="x1" fill="freeze" from="200" to="350" dur="0.3" repeatCount="1"/>
                <animate attributeName="x2" fill="freeze" from="400" to="550" dur="0.3" repeatCount="1"/>
            </line>
        </g>
    );
}

export default Line;
