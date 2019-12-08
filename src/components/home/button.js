import React from 'react';
import { makeStyles, lighten, darken } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { motion } from "framer-motion";

const useStyles = makeStyles({
    arrowContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 60,
      position:'relative'
    },
    arrow: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        borderRadius: '50%',
        animation: '$container 2s linear infinite running',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: `${darken('#1dd1aa', 0.6)}`
        },
    },
    arrowIcon: {
      fontSize: 50,
      animation: '$arrowanimation 2s linear infinite running'
    },
    arrowIcon2: {
      marginTop: -40,
    },
    line: {
      height: 7,
      backgroundColor: '#fff',
      width: 100,
      marginTop: 20,
      marginBottom: 85,
      borderRadius: 5
    },
    '@keyframes container': {
        from: {border: `5px solid ${darken('#1dd1aa', 0.8)}`},
        to: {border: `5px solid ${lighten('#1dd1aa', 0.6)}`}
    },
    '@keyframes containerHover': {
        from: {backgroundColor: `${darken('#1dd1aa', 0.8)}`},
        to: {backgroundColor: `${lighten('#1dd1aa', 0.6)}`}
    },
    '@keyframes arrowanimation': {
        from: {color: `${darken('#1dd1aa', 0.8)}`},
        to: {color: `${lighten('#1dd1aa', 0.6)}`}
    },    
});

const Button = ({onClick, open}) => {
    const classes = useStyles();
    return (
        <Box position="absolute" width="100%" top="30%" zIndex={2000}>
            <motion.div
                onClick={onClick}
                initial={{marginTop: 0}}
                animate={{ marginTop: 15 }}
                transition={{
                    yoyo: Infinity,
                    duration: 0.5,
                    ease: "easeInOut"
                }}
                className={(classes.arrowContainer)}
                whileHover={{marginTop: 0}}
            >
                <motion.div className={classes.arrow}
                    initial={{paddingLeft: 5, paddingRight: 5,paddingTop: 0, paddingBottom: 0}}
                    animate={{ paddingLeft: 6, paddingRight: 6 ,paddingTop: 1, paddingBottom: 1}}
                    transition={{
                        yoyo: Infinity,
                        duration: 0.5,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 360,
                        damping: 100,
                    }}
                >
                    <KeyboardArrowDownIcon className={classes.arrowIcon} />
                    <KeyboardArrowDownIcon className={clsx(classes.arrowIcon, classes.arrowIcon2)} /> 
                </motion.div>              
            </motion.div> 
        </Box>

    );
}

export default Button;
