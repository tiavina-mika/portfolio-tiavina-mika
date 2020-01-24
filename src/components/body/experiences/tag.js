import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
    text: {
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: 300,
        color: grey[600]
    },
});

const Tag = ({ icon, text }) => {
    const classes = useStyles();

    return (
            <Box display="flex" alignItems="center" mr={3}>
                <Box mr={0.8}>{icon}</Box>
                <Box>
                    <Typography className={classes.text}>
                        { text }
                    </Typography>
                </Box>
            </Box>
    );
}

export default Tag;
