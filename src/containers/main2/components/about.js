import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './blocks/title';
import Line from './blocks/line';
import Description from './blocks/description';
import Main from './about/main';

const string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;
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
  