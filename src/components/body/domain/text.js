import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        fill: '#fff',
        fontSize: 4,
        fontWeight: 700,
        fontFamily: 'Muli',
        textAlign: 'left'
    },
    description: {
        fill: '#fff',
        fontSize: 3,
        // fontWeight: 700,
        fontFamily: 'Muli',
    },   
})

const Text = ({x, y}) => {
    const classes = useStyles();

    return (
        <g>
            <text x={x} y={y} textAnchor="middle" className={classes.title}>Le Lorem Ipsum est simplement du faux </text>
            <text x={x} y={parseInt(y) + 5} textAnchor="middle" className={classes.description}>
                <tspan x={x} y={parseInt(y) + 5}>Le Lorem Ipsum est simplement du faux </tspan>       
                <tspan x={x} y={parseInt(y) + 10}>e Lorem Ipsum est simplement du faux texte employé</tspan>       

                <tspan x={x} y={parseInt(y) + 15}>du faux texte employé dans la composition</tspan>       
                <tspan x={x} y={parseInt(y) + 20}>Le Lorem Ipsum dans la composition</tspan>       
            </text> 
        </g>
    );
}

export default Text;
