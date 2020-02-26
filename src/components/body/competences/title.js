import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    title: {
        fontFamily: 'Comfortaa',
        fontWeight: 600,
        fontSize: 24
    }
}));

const Title = ({ text }) => {
    const classes = useStyles();
    return (
        <Box p={1}>
            <Typography variant="h6" className={classes.title}>
                { text }
            </Typography>
        </Box>
    )
}
  
export default Title;  