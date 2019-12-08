import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import UpsideDownChar from './upside-down-char';
import UpsideDownText from './upside-down-text';

const useStyles = makeStyles({
    character: {
        fontSize: 200,
        fontFamily: 'Comfortaa',
        background: '-webkit-linear-gradient(white, #38495a)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginTop: 0,
        marginBottom: 0,
        transform: 'scaleY(1)'
    },
    container: {
        diplay: 'flex', 
        flexDirection:'column', 
        justifyContent: 'flex-end'
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
    },
    title: {
        display: 'flex'
    }
});

const transition = delay => ({
    type: "spring",
    stiffness: 360,
    damping: 100,
    delay: delay,
});

const Name = ({ variants, onCompleted}) => {
    const classes = useStyles();
    const firstName = [];
    const lastName = [];

    'Tiavina Michael R.'.split('').map((char, i)=> {
        if (i < 8) {
            firstName.push(<UpsideDownChar index={i} char={char} className={classes.character} />);
        } else {
            lastName.push(<UpsideDownChar index={i} char={char} className={classes.character}/>)
        }
        return char;
    });

    return (
        <motion.div
            initial="start"
            animate="end"
            variants={variants}
            transition={transition(0.2)}
            onAnimationComplete={onCompleted}
            className={classes.container}
        >
            <UpsideDownText content="I'm" className={classes.me} />
            <h1  className={classes.title}>{firstName}</h1>
            <h1  className={classes.title}>{lastName}</h1>
        </motion.div>  
    )
}

export default Name;
