import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/header';
import About from './components/about';
import Domain from './components/domain-container';


const useStyles = makeStyles({
    root: {
        // marginTop:  window.innerHeight,
        // height: window.innerHeight,
        // background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        // overflow: 'hidden',
    }
});

const Main2 = ({onClick}) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
          <Header onClick={onClick} />
          {/* <About /> */}
          <Domain />
          {/* <Doing /> */}
      </div>
  );
}

export default Main2;
