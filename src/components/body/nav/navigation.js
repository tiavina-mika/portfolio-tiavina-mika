import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import HomeIcon from "@material-ui/icons/Home";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import BitbucketIcon from 'mdi-react/BitbucketIcon'
import SkypeIcon from 'mdi-react/SkypeIcon'
import GitlabIcon from 'mdi-react/GitlabIcon'
import DatabaseIcon from 'mdi-react/DatabaseIcon'


import MenuItem from "./menu-item";

const useStyles = makeStyles({
    container: {
        margin: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
      fontSize: 30,
      marginBottom: 25,
      fontFamily: 'Comfortaa'
    },
    onDark: {
      color: '#fff'
    },
    onLight: {
      color: '#000'
    },  
});

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const Navigation = ({ open, dark }) => {
    const classes = useStyles();
    const items = [
      { 
        data: [
            {text: 'Accueil',url: '/',icon: <HomeIcon />},
            {text: 'Expériences',url: '/expériences',icon: <DatabaseIcon />},     
        ],
        title: 'A propos'
      },
      { 
        data: [
            {text: 'Work',url: '/',icon: <HomeIcon />},
            {text: 'Work 2',url: '/',icon: <HomeIcon />},     
        ],
        title: 'Projets'
      }, 
      { 
        data: [
            {text: 'LinkeIn',url: 'https://www.linkedin.com/in/tiavina-michael-ralainirina/',icon: <LinkedInIcon />, external: true},
            {text: 'Facebook',url: 'https://web.facebook.com/tiksdamnworld',icon: <FacebookIcon />, external: true},     
            {text: 'YouTube',url: 'https://www.youtube.com/channel/UC0CfOprE7AOXQqeFhS2XUIQ',icon: <YouTubeIcon />, external: true},        
            {text: 'Skype',url: 'live:ralainirinatiavina',icon: <SkypeIcon />, external: true},     
        ],
        title: 'Réseaux sociaux'
      },
      { 
        data: [
            {text: 'GitHub',url: 'https://github.com/tiavina-mika',icon: <GitHubIcon />, external: true},     
            {text: 'GitLab',url: 'https://gitlab.com/tiavina-mika',icon: <GitlabIcon />, external: true},     
            {text: 'BitBucket',url: 'https://bitbucket.org/tiavina-mika',icon: <BitbucketIcon />, external: true},     
        ],
        title: 'Repository'
      },
      
    ];

    return (
        <motion.div variants={variants} className={classes.container}>
          <Box display="flex">
            { items.map((item, i) => (
                <Box mr={5} key={i}>
                    { open && 
                    <Typography variant="h1" className={clsx(classes.title, dark? classes.onDark: classes.onLight)}>
                        {item.title}
                    </Typography> }
                    <MenuItem items={item.data} open={open} />
                </Box>
            )) }
          </Box>

        </motion.div>
    )
}

export default Navigation;