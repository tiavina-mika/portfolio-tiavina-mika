import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Menu from "./nav/menu";
import Logo from "./nav/logo";
import Header from './header';

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
        <Box width="100%">
            <Menu />

            <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#1EB47C"> 
                <Box bgcolor="none">
                    <Logo />
                </Box>
                <Typography variant="h1" className={classes.title}>Poesia</Typography>
            </Box>
            <Box>
                <Header />
            </Box>
        </Box>
    );
}

export default Poesia;
