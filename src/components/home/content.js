import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { motion } from "framer-motion";
import Name from '../../components/home/name';
import Post from '../../components/home/post';

const useStyles = makeStyles({
    name:  {
        fontSize: 200,
        fontFamily: 'Comfortaa',
        // fontFamily: 'QuestaGrandeRegular',
        background: '-webkit-linear-gradient(white, #38495a)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginTop: 0,
        marginBottom: 0,
    },
    greeting: {
        fontSize: 200,
        fontFamily: 'Arial',
        color: '#fff',
        fontWeight: 700
    },
    me: {
        fontSize: 150,
        color: '#fff',
        fontFamily: 'QuestaGrandeRegular',
        fontStyle: 'italic',
    }
});

const Content = () => {
    const classes = useStyles();
    const [greetingCompleted, setGreetingCompleted] = useState(false)
    const [nameCompleted, setNameCompleted] = useState(false)
    const [postCompleted, setPostCompleted] = useState(false)

    const variants = {
        start: { opacity: 0, marginBottom: 5000, transform: 'scale(2)'},
        end: { opacity: 1, marginBottom: 0, transform: 'scale(1)'},
    }

    const onGreetingComplete = () => {
        setTimeout(() => setGreetingCompleted(true), 1000);
    };
    const onNameComplete = () => {
        setTimeout(() => setNameCompleted(true), 3000);
    };
    const onPostComplete = () => {
        setTimeout(() => setPostCompleted(true), 5000);

    };
    const greetingComponent = (
        <motion.div
            initial="start"
            animate="end"
            variants={variants}
            transition={{
                type: "spring",
                stiffness: 360,
                damping: 100,
                delay: 1,
            }}
            onAnimationComplete={onGreetingComplete}
        >
            <Typography className={classes.greeting}>
                Hello
            </Typography>     
        </motion.div>  
    );

    const nameComponent = (<Name variants={variants} onCompleted={onNameComplete}/>  );

    const post = (<Post variants={variants} onCompleted={onPostComplete}/>);


    return (
        <Box
            display="flex"
            justifyContent={nameCompleted ? postCompleted ? "flex-end": "center": "flex-end"}
            alignItems={nameCompleted ? postCompleted ? "flex-start": "center": "flex-start"}
            height="100vh" 
            flexDirection="column"
            pl={5}
        >
            { !greetingCompleted ? greetingComponent: !nameCompleted ? nameComponent: !postCompleted ? post: nameComponent}
        </Box>
    )
}

export default Content;
