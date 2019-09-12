import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { motion } from "framer-motion";
import Motion from '../../../../components/motion';

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
    }
});

const Right = () => {
    const classes = useStyles();

    return (
          <div className={classes.root}>
                    <Motion
                        initial={{ marginLeft: -6200 }}
                        animate={{ marginLeft: 0 }}
                        delay= {1.8}
                        marginBottom= {10}
                    >
                        <Typography variant="h1" className={classes.title}>Tiavina Michael Ralainirina</Typography>
                    </Motion>
                    <Motion
                        initial={{ marginLeft: -6400 }}
                        animate={{ marginLeft: 0 }}
                        delay= {2.2}
                        fontSize= {30}
                        marginBottom= {10}
                    >
                        <Typography variant="h3" className={classes.subtitle}>Developpeur basé à Madagascar</Typography>
                    </Motion>
 
                    <Motion
                        initial={{ marginLeft: -9000 }}
                        animate={{ marginLeft: 0 }}
                        delay= {2.6}
                        dumping={0}
                        marginTop= {10}
                        textAlign="justify"
                    >
                    <Typography variant="paragraph" className={classes.description}>
                        I love to code ... I started programming at age 7, and have been doing it ever since. I have been in various software related roles, including embedded software, web development, training and instructional design, software architecture, release management and consulting, in both full and part-time permanent and contract capacities. I have a well-rounded background, with the expertise and experience to deliver.

I have experience in all stages of the software development lifecycle. Whether alone, or on a team, the goal is always the same: To develop high performance, high-availability secure reliable systems. I have experience as team and project lead, work well with customers, am self-motivated with exceptional communication skills (on paper, through keystrokes or just my normal everyday voice).
                    </Typography>
                </Motion>
                <Motion
                        initial={{ marginLeft: -6800 }}
                        animate={{ marginLeft: 0 }}
                        delay= {3}
                        className={classes.buttonContainer}
                    >
                    <a href="#" className={classes.downloadLink}><Typography>telecharger mon CV </Typography><ArrowRightAltIcon className={classes.rightIcon}/></a>
                </Motion>
          </div>
    )
}
  
export default Right;
  