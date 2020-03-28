import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";

import Title from './experiences/title';
import Experience from './experiences/experience';
import List from './experiences/list';
import { poesia } from '../../data/technos';
import { experiences } from '../../utils/data';
import NavBar from './nav/navbar';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        },
        
    } 
}));
const Experiences = () => {
    const location = useLocation();
    const classes = useStyles();

    const nav = () => {
        if (location.pathname.includes('/experiences')) {
            return <NavBar title="Expériences" />
        }
        return (
            <Box py={3}>
                <Box pl={5} pt={4}>
                    <Title text="Expérience Professionnelles" size={40} />
                </Box>
                <img src={`${process.env.PUBLIC_URL}/images/experience.png`} alt="header" style={{width: '100%'}}/>
            </Box>
        )
    }
    return (
        <Box display="flex" flexDirection="column" alignItems="center" id="experiences">
            { nav() }
            <Box mt={location.pathname.includes('/experiences')? 18: 8} className={classes.root}>
                <Experience 
                    src={`${process.env.PUBLIC_URL}/images/web-01.png`} 
                    technos={poesia} 
                    item="poesia"
                >
                    { experiences.map(experience => <List {...experience}/>) }
                </Experience>    
            </Box>
        </Box>
    );
}

export default Experiences;
