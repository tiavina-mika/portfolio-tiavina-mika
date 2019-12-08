import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const getRandomIntInclusive = max=> {
    return Math.floor(Math.random() * Math.floor(max))
}
const geBoxShadow = n => {
    let value = [`${getRandomIntInclusive(2000)}px ${getRandomIntInclusive(2000)}px #FFF`];
    for (let i=0; i < n; i++ ) {
        value.push(`${getRandomIntInclusive(2000)}px ${getRandomIntInclusive(2000)}px #FFF`);
    }
    return value;
}

const useStyles = makeStyles({
    stars: {
        width: '1px',
        height: '1px',
        background: 'transparent',
        boxShadow: geBoxShadow(700),
        animation: '$animStar 50s linear infinite',
       ' &:after': {
            content: " ",
            position: 'absolute',
            top: '2000px',
            width: '1px',
            height: '1px',
            background: 'transparent',
            boxShadow: geBoxShadow(700),
        }
    },
    stars2: {
        width: '2px',
        height: '2px',
        background: 'transparent',
        boxShadow: geBoxShadow(200),
        animation: '$animStar 100s linear infinite',          
       ' &:after': {
            content: " ",
            position: 'absolute',
            top: '2000px',
            width: '2px',
            height: '2px',
            background: 'transparent',
            boxShadow: geBoxShadow(200),
        }
    },
    stars3: {
        width: '3px',
        height: '3px',
        background: 'transparent',
        boxShadow: geBoxShadow(100),
        animation: '$animStar 150s linear infinite', 
       ' &:after': {
            content: " ",
            position: 'absolute',
            top: '2000px',
            width: '3px',
            height: '3px',
            background: 'transparent',
            boxShadow: geBoxShadow(100),
        }
    },
    '@keyframes animStar': {
        from: {transform: 'translateY(0px)'},
        to: {transform: `translateY(-2000px)`}
    },
});


const Stars = () => {
  const classes = useStyles();

    return (
        <>
            <div className={classes.stars}></div> 
            <div className={classes.stars2}></div> 
            <div className={classes.stars3}></div> 
        </>
    );
}

export default Stars;
