import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Container from './container';

const useStyles = makeStyles({
    title: {
        fontSize: 150,
        fontFamily: 'Century Gothic Regular',
        fontWeight: 700,
        color: '#fff'
    }
});

const Poesia = () => {
    const classes = useStyles();

    return (
        <Container title="Poesia" />
    );
}

export default Poesia;
