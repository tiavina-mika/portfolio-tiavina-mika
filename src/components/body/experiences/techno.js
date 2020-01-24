import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
    root: {
        transition: 'all linear 200ms',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: `1px 3px 9px ${grey[500]}`,
            marginTop: -5,
        }
    },
    text: {
        fontSize: 20,
        fontFamily: 'Muli',
        fontWeight: 700,
    },
    link: {
        color: grey[700],
        textDecoration: 'none'
    }
});

const Techno = ({ src, alt, text, url }) => {
    const classes = useStyles();

    return (
        <a href={url} className={classes.link}>
            <Box 
                display="flex" 
                alignItems="center" 
                border={1} 
                borderColor="#CCCCCC" 
                pr={2} pl={1.5} pt={0.6} pb={0.2} mb={2} 
                justifyContent="space-between" 
                borderRadius={15}
                mr={2}
                className={classes.root}
            >
                <Box mr={0.5}>
                    <img src={src} alt={alt || 'icon'} />
                </Box>
                <Box ml={0.6}>
                    <Typography className={classes.text}>{ text }</Typography>
                </Box>
            </Box>       
        </a>
 
    );
}

export default Techno;
