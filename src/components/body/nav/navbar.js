import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Menu from "../nav/menu";
import Logo from "../nav/logo";

const useStyles = makeStyles({
    title: {
        fontSize: 150,
        fontFamily: 'Century Gothic Regular',
        fontWeight: 700,
        color: '#fff'
    }
});

const NavBar = ({ title }) => {
    const classes = useStyles();

    return (
        <Box width="100%">
            <Box position="fixed" top={0} left={0} bottom={0} width="100%" zIndex={3}>
                <Menu />
                <Box ml={10} mt={2}>
                    <Logo dark={true} />                
                </Box>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#1EB47C"> 
                <Typography variant="h1" className={classes.title}>{ title }</Typography>
            </Box>
        </Box>
    );
}

export default NavBar;