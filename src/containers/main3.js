import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './main2.css';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function multipleBoxShadow(n){
    // let value1 = `${getRandomInt(2000)}px ${getRandomInt(2000)}px #FFF`;
    const value2 = [];
    for(let i=2; i < n; i++) {
        value2.push(`${getRandomInt(2000)}px ${getRandomInt(2000)}px #FFF`)
    }
    return value2.join(',');
}

const useStyles = makeStyles({
    container: {
        height: window.innerHeight,
        background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        overflow: 'hidden',
    },
    stars1: {
        width: '10px',
        height: '10px',
        background: 'transparent',
        animation: 'animStar 50s linear infinite',
        boxShadow: multipleBoxShadow(700),
        '&:after': {
            content: " ",
            position: 'absolute',
            top: '2000px',
            width: '10px',
            height: '10px',
            background: 'transparent',
            boxShadow: multipleBoxShadow(700),
        }
    }
});

function Main2() {
    const classes = useStyles();
  return (
    <div className={classes.container}>
        <span className={classes.stars1}></span>
        <span className={classes.stars2}></span>
        <span className={classes.stars3}></span>
        <div id='title'>
            <span>
                PURE CSS
            </span>
            <span>
                PARALLAX PIXEL STARS
            </span>
        </div>
    </div>
  );
}

export default Main2;
