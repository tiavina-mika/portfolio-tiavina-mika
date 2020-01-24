import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
    text: {
        fontSize: 23,
        fontFamily: 'Montserrat',
        fontWeight: 700
    },   
    iconButton: {
        backgroundColor: '#F2A600',
        '&:hover': {
            backgroundColor: '#F2A600',
        }
    }
});

const Content = ({ icon, text, children }) => {
    const classes = useStyles();

    return (
        <Box mt={3} mb={10}>
            <Box>
                <IconButton className={classes.iconButton}>
                    {icon}
                </IconButton>
            </Box>
            <Box my={2}>
                <Typography className={classes.text}>
                    {text}
                </Typography>
            </Box>
            <Box my={1}>
                { children }
            </Box>
        </Box>
    );
}

export default Content;
