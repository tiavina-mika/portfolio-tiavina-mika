import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './blocks/title';
import Line from './blocks/line';
import Description from './blocks/description';
import Main from './about/main';

const string = `If I had to define what my passion is in the larger scheme of things, I would define it to be the fact that software is written by people, for people. So things like “customer service” or “team building” are the things that inspire me and drive me to be the best I can be.`

const useStyles = makeStyles({
    root: {
        // display: 'flex',
        // justifyContent: 'center',
        // border: '1px solid #b2b2b2'
        width: '60%',
        margin: 'auto',
        paddingTop: 75,
        paddingBottom: 50,
    },
})

const About = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
          <Title text="A PROPS DE MOI" id="about"/>
          <Line />
          <Description text={string}/>
          <Main />
      </div>
    )
  }
  
  export default About;
  