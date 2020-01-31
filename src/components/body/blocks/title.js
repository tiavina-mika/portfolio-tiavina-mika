import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles({
    h1: {
        fontFamily: ['Montserrat','sans-serif','Arial'].join(','),
        paddingBottom: 5,
        color: '#373432',
        fontWeight: 700,
        fontSize: 60,
        letterSpacing: -5,
    },
})

const BlockTitle = ({ text, id, animated }) => {
    const classes = useStyles();
    if (animated) {
        return (
            <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutDown' delay={200}>
                <Typography className={classes.h1} id={id}>{text}</Typography>
            </ScrollAnimation>
        )
    }
    return (
        <div>
            <Typography className={classes.h1} id={id}>{text}</Typography>
        </div>
    );
}
  
export default BlockTitle;
  