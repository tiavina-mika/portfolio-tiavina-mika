import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('lg')]: {
           marginTop: 75,
           marginBottom: 75,
        }
    },
    title: {
        fontSize: 40,
        marginTop: 8,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 50,
        marginTop: 15,
        marginBottom: 25,
    },
    description: {
        lineHeight: '40px',
        fontWeight: 300,
        fontSize: 22,
        marginTop: 15,
        marginBottom: 15,
    },
    buttonContainer: {
        marginTop: 30
    },
    downloadLink: {
        color: '#333333',
        border: '2px solid rgb(34,34,34)',
        borderRadius: 0,
        letterSpacing: '2px',
        fontSize: 14,
        fontFamily: ['Montserrat','Helvetica','Arial','Lucida','sans-serif'].join(','),
        fontWeight: 700,
        textTransform: 'uppercase',
        padding: '15px 25px',
        backgroundColor: 'rgba(0,0,0,0)',
        textDecoration: 'none',
        transition: 'all 0.5s',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: 250,
        '&:hover': {
            color: '#fff',
            backgroundIage: 'initial',
            backgroundColor: '#333333'
        }
    },
    downloadLinkContainer: {
        marginTop: 60,
        marginBottom: 15,
    }
}));

const Right = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ScrollAnimation animateIn='fadeInUp' delay={500}>
                <Typography variant="h1" className={classes.title}>Tiavina Michael Ralainirina</Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={600}>
                <Typography variant="h3" className={classes.subtitle}>Developpeur basé à Madagascar</Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={700}>
                <Typography variant="paragraph" className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   
                </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={800} className={classes.downloadLinkContainer}>
                <a href={`${process.env.PUBLIC_URL}/cv-tiavina-michael.pdf`} download className={classes.downloadLink}><Typography>telecharger mon CV </Typography><ArrowRightAltIcon className={classes.rightIcon}/></a>
            </ScrollAnimation>
        </div>
    )
}
  
export default Right;
  