import React from 'react';
import clsx from 'clsx';
import './names.css'
import { makeStyles, lighten } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    name:  {
        background: '-webkit-linear-gradient(white, #38495a)',
        fill: lighten('#38495a', 0.3),
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: 50,
        marginTop: 0,
        fontFamily: 'Comfortaa',
        textTransform: 'uppercase',        
    },
    name2: {
      marginTop: -35
    }
})

const Names = () => {
  const classes = useStyles();
  return (
    <Box width="60%" display="flex" justifyContent="center" >
        <svg width="100%" height="100%">
            <path id="path">
                <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="6.8s" begin="0s" repeatCount="indefinite"/>
            </path>
            <text className={classes.name}>
                <textPath xlinkHref="#path"><tspan>Tiavina Michael</tspan> <tspan>Ralainirina</tspan></textPath>
            </text>
        </svg>
    </Box>
    
  )
}

export default Names;
