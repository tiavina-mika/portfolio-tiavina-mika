import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './main2.css';
import Header from './components/header';
import About from './components/about';


const useStyles = makeStyles({
    root: {
        // marginTop:  window.innerHeight,
        // height: window.innerHeight,
        // background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        // overflow: 'hidden',
    }
});

function Main2({onClick}) {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Header onClick={onClick} />
        <About />
    </div>
  );
}

export default Main2;
