import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './blocks/title';
import Line from './blocks/line';
import Description from './blocks/description';
import Main from './about/main';

const string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;
const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        [theme.breakpoints.up('lg')]: {
            width: '60%',
            marginBottom: 150,
            marginTop: 50
        },
        [theme.breakpoints.down('lg')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
    },
}));

const About = ({ open }) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
          <Title text="A PROPS DE MOI" id="about" open={open}/>
          <Line />
          <Description text={string}/>
          <Main />
      </div>
    )
  }
  
  export default About;
  