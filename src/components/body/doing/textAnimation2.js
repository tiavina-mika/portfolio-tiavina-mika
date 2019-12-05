import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextLoop from "react-text-loop";

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '155%',
        // textJustify: 'center',
        zIndex: 30,
    },
    titleContainer: {
        // position: 'absolute',
        // top: '155%',
        // // textJustify: 'center',
        // zIndex: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'SofiaPro-Bold',
        color: '#fff',
        fontSize: 135,
    },
    activeTitle: {
        color: '#01cfcf'
    },
    textLoop: {
        width: 780,
    }
})

const TextAnimation = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
            <TextLoop
            mask={true}
            springConfig={{ stiffness: 70, damping: 31 }}
            delay={8000}
            >
                <div className={classes.titleContainer}>
                    <TextLoop
                        mask={true}
                        springConfig={{ stiffness: 70, damping: 31 }}
                        interval={1500}
                        className={classes.textLoop}
                        // adjustingSpeed={400}
                        >
                            <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>FRONT-END</Typography>
                            <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>BACK-END</Typography>
                            <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>FLULLSTACK</Typography>
                            <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>WEB</Typography>
                            <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>MOBILE</Typography>
                    </TextLoop>{" "}
                    <Typography variant="h1" className={classes.title}>DEVELOPER</Typography>
                </div>
                <div className={classes.titleContainer}>
                    {/* <TextLoop
                        mask={true}
                        springConfig={{ stiffness: 70, damping: 31 }}
                        interval={1500}
                        className={classes.textLoop}
                        // adjustingSpeed={400}
                        > */}
                            {/* <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>FRONT-END</Typography>
                            <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>BACK-END</Typography>
                            <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>FLULLSTACK</Typography>
                            <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>WEB</Typography>
                            <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>MOBILE</Typography> */}
                    {/* </TextLoop> */}
                    <Typography variant="h1" className={clsx(classes.title, classes.activeTitle)}>MOBILE</Typography> 
                    <Typography variant="h1" className={classes.title}>DESIGNER</Typography>
                </div>
            </TextLoop>
    </div>

    )
  }
  
  export default TextAnimation;