import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles({
    text: {
        fontSize: 22,
        fontFamily: 'Montserrat',
        fontWeight: 700
    },
    colored: {
        color: '#48D1FF',
    },
    openSource: {
        color: '#8782FF'
    }
});

const InProgress = ({ openSource }) => {
    const classes = useStyles();

    return (
            <Box bgcolor={openSource? lighten('#8782FF', 0.8): "#E3F8FF"} borderRadius={20} px={2} py={0.8} mx={5}>
                <Typography className={clsx(openSource? classes.openSource: classes.colored, classes.text)}>
                    { openSource? 'Open Source': 'En Cours' }
                </Typography>
            </Box>
    );
}

export default InProgress;
