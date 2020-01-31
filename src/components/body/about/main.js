import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ScrollAnimation from 'react-animate-on-scroll';
import Card from './card';
import Right from './right';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 75,
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
        },
    },
    container: {
        [theme.breakpoints.up('lg')]: {
            width: '50%',
        },
        [theme.breakpoints.down('lg')]: {
            width: '100%',
        },
    },
    img: {
        width: '55%'
    }
}));

const Main = ({ width }) => {
    const classes = useStyles();

    const card = () => {
        if (!isWidthUp('md', width)) {
            return (
                <Box display="flex" justifyContent="center" width="100%" my={5}>
                    <img src={`${process.env.PUBLIC_URL}/me3.jpg`} alt="tiavina-michael" className={classes.img}/>
                </Box>
            )
        }
        return <Card />
    }
    return (
        <div className={classes.root}>
            <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutLeft' delay={500} className={classes.container}>
                { card() }
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutRight' delay={500} className={classes.container}>
                <Right />
            </ScrollAnimation>
        </div>
    )
}
  
export default withWidth()(Main);
  