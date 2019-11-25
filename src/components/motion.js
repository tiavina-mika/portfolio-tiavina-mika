import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";

const useStyles = makeStyles({
    root: props => ({
        backgroundColor: props.backgroundColor,
        border: props.border,
        color: props.color,
        width: props.width,
        height: props.height,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
        textAlign: props.textAlign,
        fontSize: props.fontSize,
    }),
  });

const Motion = ({ children, initial, animate, delay, type="spring", stiffness= 260, damping=20, style, className, ...props }) => {
    const classes = useStyles(props);
    return (
        children ? <motion.div
            style={{...style}}
            className={clsx(classes.root, className)}
            initial={{...initial}}
            animate={{...animate}}
            transition={{
                type: type,
                stiffness: stiffness,
                damping: damping,
                delay: delay
            }}
        >
             {children}
        </motion.div> 
        : <motion.div
                style={{...style}}
                className={clsx(classes.root, className)}
                initial={{...initial}}
                animate={{...animate}}
                transition={{
                    type: type,
                    stiffness: stiffness,
                    damping: damping,
                    delay: delay
                }}
            />
    )
}
  
export default Motion;
  