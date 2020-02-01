import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('lg')]: {
            marginTop: 75
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: 10
        },       
    },
    title: {
        fontFamily: ['Montserrat','sans-serif','Arial'].join(','),
        color: '#6D6D6D',
        fontSize: 20,
        lineHeight: '2em'
    }
}));

const Description = ({text}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
           <Typography variant="subtitle2" className={classes.title}>{text}</Typography>
       </Box>
       
    )
}
  
export default Description;
  