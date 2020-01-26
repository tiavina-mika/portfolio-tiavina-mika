import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowButtonAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles({
    title: {
        fontSize: 30,
    },
    subtitle: {
    },
    description: {
        lineHeight: '30px',
        fontWeight: 300,
        fontSize: 18
    },
    downloadLink: {
        color: '#fff',
        border: '2px solid rgb(34,34,34)',
        borderRadius: 0,
        letterSpacing: '2px',
        fontSize: 14,
        fontFamily: ['Montserrat','Helvetica','Arial','Lucida','sans-serif'].join(','),
        fontWeight: 700,
        textTransform: 'uppercase',
        padding: '15px 25px',
        backgroundColor: '#000',
        textDecoration: 'none',
        transition: 'all 0.5s',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: 250,
        '&:hover': {
            color: '#333333',
            backgroundIage: 'initial',
            backgroundColor: '#fff'
        }
    }
});

const ButtonLink = ({ url, text, onClick }) => {
    const classes = useStyles();

    return (
        <a download className={classes.downloadLink} onClick={onClick}>
            <Typography>{text || 'View Project'}</Typography>
            <ArrowButtonAltIcon className={classes.rightIcon}/>
        </a>
    )
}
  
export default ButtonLink;
  