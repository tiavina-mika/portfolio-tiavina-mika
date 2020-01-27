import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./menu-item";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
    ul: {
        margin: 0,
        padding: '25px',
        position: 'absolute',
        top: '100px',
        width: '230px',
    }
});

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = () => {
    const classes = useStyles();
    const items = [{
      text: 'Home',
      url: '/',
      icon: <HomeIcon />
    }];

    return (
        <motion.ul variants={variants} className={classes.ul}>
            {items.map((item, i) => (
                <MenuItem i={i} key={i} text={item.text} icon={item.icon}/>
            ))}
        </motion.ul>
    )
}

export default Navigation;