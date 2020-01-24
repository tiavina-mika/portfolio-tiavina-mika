import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Techno from './techno';

const useStyles = makeStyles(theme => ({
    left: {
        [theme.breakpoints.up('lg')]: {
            position:"sticky", 
            height:"100%", 
            top:0,
        }
    } 
}));

const Experience = ({ src, children, technos }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item lg={6} className={classes.left}>
                <img src={src} alt="img" width="100%" />
                <Box display="flex" flexWrap="wrap" alignContent="space-between" justifyContent="center">
                    { technos.map(techno => (
                        <Techno src={techno.src} alt={techno.alt} text={techno.text} url={techno.url} />
                    ))}
                </Box>
            </Grid>
            <Grid item lg={6}>
                { children }
            </Grid>
        </Grid>
    );
}

export default Experience;
