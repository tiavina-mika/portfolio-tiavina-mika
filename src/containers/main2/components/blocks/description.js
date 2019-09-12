import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Motion from '../../../../components/motion';

const useStyles = makeStyles({
    title: {
        fontFamily: ['Montserrat','sans-serif','Arial'].join(','),
        color: '#6D6D6D',
        fontSize: 20,
    }
});

const Description = ({text}) => {
    const classes = useStyles();
    return (
        <Motion
            initial={{ marginLeft: -7000 }}
            animate={{ marginLeft: 0 }}
            delay= {1}
            textAlign="justify"
        >
             <Typography variant="subtitle2" className={classes.title}>{text}</Typography>
        </Motion>
    )
}
  
export default Description;
  