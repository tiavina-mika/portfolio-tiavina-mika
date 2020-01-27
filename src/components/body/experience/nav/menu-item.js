import * as React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    li: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    iconButton: {
      marginRight: 5
    }
});

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MenuItem = ({ i, text, icon }) => {
  const classes = useStyles();

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={classes.li}
    >
      <Box display="flex" alignItems="center">
          <IconButton className={classes.iconButton}>
              {icon}
          </IconButton>
          <Typography>
              {text}
          </Typography>
      </Box>
    </motion.li>
  );
};

export default MenuItem;