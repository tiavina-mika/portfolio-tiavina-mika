import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import UpsideDownText from './upside-down-text';
import { transition } from "../../utils/utils";

const useStyles = makeStyles({
    text: {
        fontSize: 80,
        color: '#fff',
        fontFamily: 'QuestaGrandeRegular',
    }
});

const variants = {
    start: { marginLeft: 5000, transform: 'scale(2)'},
    end: {  marginLeft: 0, transform: 'scale(1)'},
};

const Post = ({ onCompleted }) => {
    const classes = useStyles();

    return (
        <motion.div
            initial="start"
            animate="end"
            variants={variants}
            transition={transition(0.2)}
            className={classes.container}
            onAnimationComplete={onCompleted}

        >
            <UpsideDownText content="Full Stack Web/Mobile Developer" className={classes.text} onCompleted={onCompleted} speed/>
        </motion.div>  
    )
}

export default Post;
