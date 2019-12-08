import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UpsideDownChar from './upside-down-char';

const useStyles = makeStyles({
    title: {
        display: 'flex',
        padding: 0,
    }
});

const UpsideDownText = ({ content, className, speed }) => {
    const classes = useStyles();
    const chars = [];
    let delay = 1.5;

    if (speed) { delay = 1/2};
    
    content.split('').map((char, i)=> {
        chars.push(<UpsideDownChar index={i*delay} char={char} className={className}/>);
        return char;
    })
    return <h3 className={classes.title}>{chars}</h3>;
}

export default UpsideDownText;
