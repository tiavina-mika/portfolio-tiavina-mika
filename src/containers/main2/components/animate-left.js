import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";

const useStyles = makeStyles({
    root: {
        width: '50%'
    }
});

const Animate = ({children}) => {
    const classes = useStyles();
    return (
        <motion.div
            className={classes.root}
            // initial={direction === 'left' ? {marginLeft: -2000} : {marginLeft: 4000 }}
            // animate={ direction === 'right' ? { marginLeft: 0 }: { marginLeft: 1000 }}
            initial={{marginLeft: -8000}}
            animate={{marginLeft: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.2
            }}
        >
          {children}
        </motion.div>
    )
}
  
export default Animate;
  