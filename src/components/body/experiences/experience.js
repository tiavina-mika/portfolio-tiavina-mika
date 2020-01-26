import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import ScrollAnimation from 'react-animate-on-scroll';
import Techno from './techno';
import ButtonLink from '../blocks/button-link';

const useStyles = makeStyles(theme => ({
    left: {
        [theme.breakpoints.up('lg')]: {
            position:"sticky", 
            height:"100%", 
            top:0,
        }
    } 
}));

const Experience = ({ src, children, technos, item }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} mb={5}>
            <Grid item lg={6} className={classes.left}>
                <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutLeft' delay={500}>
                    <img src={src} alt="img" width="100%" />
                    <Box display="flex" flexWrap="wrap" alignContent="space-between" justifyContent="center">
                        { technos.map(techno => (
                            <Techno src={techno.src} alt={techno.alt} text={techno.text} url={techno.url} />
                        ))}
                    </Box>
                    <ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutUp' delay={700}>
                        <Box display="flex" justifyContent="center" py={3} mt={8}>
                            <ButtonLink item={item} />
                        </Box>
                    </ScrollAnimation>
                </ScrollAnimation>
            </Grid>
            <Grid item lg={6}>
                <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight' delay={500}>
                    { children }
                </ScrollAnimation>
            </Grid>
        </Grid>
    );
}

export default Experience;
