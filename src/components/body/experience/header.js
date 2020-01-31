import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        fontSize: 70,
        fontFamily: 'Century Gothic Regular',
        fontWeight: 700,
    },
    container: {
        boxShadow: '0px 0px 115px #000000a6'
    },
    text: {
        fontFamily: 'Muli',
        fontSize: 20,
        lineHeight: '1.7em'
    },
    img: {
        zIndex: 2
    },
    stickyNav: {
        position:"sticky",
        flexGrow:1,
        top:0,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <Box py={5}>
            <Box display="flex" justifyContent="center" alignItems="center" pt={3}> 
                <img src={`${process.env.PUBLIC_URL}/images/web-01.png`} alt="img" className={classes.img}/>
            </Box>
            <Box display="flex" justifyContent="center" mt={-15} id="myHeader">
                <Box className={classes.container} borderRadius={25} display="flex" flexDirection="column" alignItems="center" width="50%" px={8} pt={20} pb={5}>
                    <Box>
                        <Typography variant="h1" className={classes.title}>
                            One of the oldest industries had to fuse with one of the newest
                        </Typography>                       
                    </Box>
                    <Box py={3}>
                        <Typography className={classes.text}>
                        One of the oldest industries had to fuse with one of the newest when Valeyo (formerly CRI Canada) wanted to rebrand. Being a software company that provides digital solutions to insurance companies meant that striking that balance was critical. So we needed to get the imagery right. We couldn’t position the company as too technologically forward as we wouldn’t resonate with more traditional clients, but visual touches like parallax scrolling helped create a progressive look.
                        </Typography>                        
                    </Box>
                </Box>            
            </Box>
        </Box>
    );
}

export default Header;
