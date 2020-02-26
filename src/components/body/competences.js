import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Competence from './competences/competence';

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

const data = [
    {
        title: 'Languages Informatiques',
        barType: 'iphone',
        data: [
            {
                value: 98,
                item: 'Javascript',
                color: 'blue'
            },
            {
                value: 95,
                item: 'PHP',
                color: 'green'
            },
            {
                value: 40,
                item: 'Python',
                color: 'violet'
            },   
        ]
    },
    {
        title: 'Frontend',
        data: [
            {
                value: 98,
                item: 'React',
            },
            {
                value: 45,
                item: 'Angular',
            },
            {
                value: 100,
                item: 'HTML',
            },   
            {
                value: 100,
                item: 'CSS',
            },   
            
        ]
    },
    {
        title: 'Backend',
        barType: 'paper',
        data: [
            {
                value: 95,
                item: 'NodeJs',
                color: 'orange'
            },
            {
                value: 95,
                item: 'Symfony',
                color: 'green'
            },
            {
                value: 35,
                item: 'Ruby on Rails',
                color: 'blue'
            },   
        ]
    },
];

const Competences = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Grid container spacing={8} className={classes.container}>
                { data && data.map(d => (
                    <Grid item lg={6} xs={12} className={classes.block}>
                        <Competence title={d.title} data={d.data} barType={d.barType} />
                    </Grid>                
                ))}
            </Grid>
        </Box>
    )
}
  
export default Competences;  