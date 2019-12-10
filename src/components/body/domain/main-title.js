import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        fontSize: 10,
        fontFamily: 'Comfortaa',
        fontWeight: 700,
        fill: '#fff'
    },   
})

const MainTitle = ({x, y}) => {
    const classes = useStyles();

    return (
        <g>
            <text x={x} y={parseInt(y) + 5} textAnchor="middle" className={classes.title}>
                Compétences clés    
            </text> 
        </g>
    );
}

export default MainTitle;
