import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        transition: 'all linear 200ms',
        cursor: 'pointer',
        display:"flex" ,
        alignItems:"center" ,
        border:"1px solid #CCCCCC" ,
        paddingRight: 12, 
        paddingLeft: 12, 
        paddingTop: 4, 
        marginBottom: 10, 
        justifyContent:"space-between" ,
        borderRadius:15,
        marginRight: 10,
        boxShadow: `1px 3px 9px transparent`,
        '&:hover': {
            boxShadow: `1px 3px 9px ${grey[500]}`,
        }
    },
    text: {
        fontSize: 20,
        fontFamily: 'Muli',
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16
        },
    },
    link: {
        color: grey[700],
        textDecoration: 'none'
    }
}));

const Techno = ({ src, alt, text, url }) => {
    const classes = useStyles();

    return (
        <a href={url} className={classes.link}>
            <Box 
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
