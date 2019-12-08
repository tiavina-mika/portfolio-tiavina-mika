import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import { transition } from "../../utils/utils";

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
});

const UpsideDownChar = ({ char, index, delay, className, style}) => {
    const classes = useStyles();

    return (
        <motion.p 
            initial={{opacity: 0, transform: 'scaleY(-1)'}}
            animate={{opacity: 1, transform: 'scaleY(1)'}}
            transition={transition(delay ? delay: index/5)}
            className={className ? className: classes.character}
            style={{...style}}
        >
            {char !== ' ' ? char: '\u00A0'}
        </motion.p>
    )
}

export default UpsideDownChar;
