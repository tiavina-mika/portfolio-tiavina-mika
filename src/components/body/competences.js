import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Competence from './competences/competence';
import { data } from '../../data/competences'

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'center',
        },    
    },
    container: {
        [theme.breakpoints.up('lg')]: {
            width: '70%',
        },    
    },
    block: {
        [theme.breakpoints.up('lg')]: {
            // width: '50%',
            // flexGrow: 1,
            // marginLeft: 10,
            // marginRight: 10,
        },
        [theme.breakpoints.down('lg')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
    },
}));

const Competences = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Grid container spacing={8} className={classes.container}>
                { data && data.map(d => (
                    <Grid item lg={6} xs={12} className={classes.block}>
                        <Competence title={d.title} data={d.data} barType={d.barType} barColor={d.barColor} />
                    </Grid>                
                ))}
            </Grid>
        </Box>
    )
}
  
export default Competences;  