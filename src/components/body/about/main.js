import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AnimateLeft from '../animate-left';
import AnimateRight from '../animate-right';
import Card from './card';
import Right from './right';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        marginTop: 75
    },
});

const Main = () => {
    const classes = useStyles();
    return (
          <div className={classes.root}>
            <AnimateLeft direction="left">
                <Card />
            </AnimateLeft>
            <AnimateRight direction="right">
                <Right />
            </AnimateRight>            
          </div>
    )
}
  
export default Main;
  