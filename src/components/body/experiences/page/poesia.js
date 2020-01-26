import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({

});

const Poesia = () => {
    const classes = useStyles();

    return (
        <Box bgcolor="red" width="100%">
            <h1>Poesia</h1>
        </Box>
    );
}

export default Poesia;
