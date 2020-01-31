import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid #b2b2b2'
    },
    link: {
        fontFamily: 'Montserrat',
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#403b41',
        // backgroundColor: '#F5F5F5',
        fontWeight: 300,
        textDecoration: 'none',
        padding: '20px 40px',
        '&:hover': {
          color: '#db4b51'
        }
    }
})

const Header = ({onClick}) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        {/* // <motion.div
        //     className={classes.root}
        //     initial={{marginTop: 500}}
        //     animate={{marginTop: 0 }}
        //     transition={{
        //         type: "spring",
        //         stiffness: 260,
        //         damping: 20,
        //         delay: 0.2
        //     }}
        // > */}
        <Button className={classes.link} onClick={onClick}>Accueil</Button>
        <AnchorLink href='#things' className={classes.link}>A propos</AnchorLink>
        <AnchorLink href='#stuff'className={classes.link}>Stuff</AnchorLink>
      </div>
    )
  }
  
  export default Header;
  