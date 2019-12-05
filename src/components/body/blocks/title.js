import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Motion from '../../motion';

const useStyles = makeStyles({
    h1: {
        fontFamily: ['Montserrat','sans-serif','Arial'].join(','),
        paddingBottom: 5,
        color: '#373432',
        fontWeight: 700,
        fontSize: 60,
        letterSpacing: -5,
    },
})

const BlockTitle = ({text, id}) => {
    const classes = useStyles();
    return (
        <Motion
            initial={{ marginLeft: -3000 }}
            animate={{ marginLeft: 0 }}
            delay= {1}
        >
            <Typography className={classes.h1} id={id}>{text}</Typography>
        </Motion>
    );
}
  
export default BlockTitle;
  