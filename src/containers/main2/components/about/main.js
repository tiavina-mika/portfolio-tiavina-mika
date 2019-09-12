import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AnimateLeft from '../animate-left';
import AnimateRight from '../animate-right';
import Card from './card';
import Right from './right';

const data = `./src/containers/main2/components/about.js
Line 3:  'Typography' is defined but never used  no-unused-vars

./src/containers/main2/components/blocks/main.js
Line 3:  'Typography' is defined but never used  no-unused-vars

./src/containers/main1/components/names.js
Line 4:   'render' is defined but never used    no-unused-vars
Line 5:   'useTrail' is defined but never used  no-unused-vars
Line 5:   'animated' is defined but never used  no-unused-vars
Line 66:  Expected '!==' and instead saw '!='   eqeqeq

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.`;

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
  