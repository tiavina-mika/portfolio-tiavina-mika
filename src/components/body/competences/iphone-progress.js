import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, lighten } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  iphoneRoot: {
    backgroundColor: '#E2E7EE',
    height: 20,
    borderRadius: 7,
  },
  paperRoot: {
    height: 35,
    borderRadius: 10,    
    backgroundColor: '#fff',
    boxShadow: `0 3px 3px #AAA9A9`,
    borderTop: `0.5px solid #eaeaea`
  },
  iphoneBar: {
    borderRadius: 7,
  },
  paperBar: {
    borderRadius: 10,
  },
  iBlue: {
    background: 'linear-gradient(to bottom, #2B9FF6, #269BF3 50%, #2097F0 75%, #4FA9EE 100%)',
  },
  iGreen: {
    background: 'linear-gradient(to bottom, #56D7A7, #37C48F 50%, #2CBC86 75%, #22B77F 100%)',
  },
  iViolet: {
    background: 'linear-gradient(to bottom, #9A89E3, #8C71E5 50%, #8C71E5 75%, #815EE6 100%)',
  },
  paperOrange: {
      backgroundColor: '#FFA500'
  },
  paperGreenLight: {
    backgroundColor: '#00FF00'
  },
  paperBlueLight: {
    backgroundColor: '#ADD8E6'
  },
  percent: {
    color: '#9FB1CA',
    fontWeight: 600
  },
  label: {
    color: '#76797F',
    fontSize: 18
  },
});

const IphoneProgress = ({ value, color, width, label, type }) => {
  const classes = useStyles();
  const [completed, setCompleted] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => setData(value), [value]);

  useEffect(() => {
    const progress = max => setCompleted(max);
    progress(data)
  }, [data]);

  const getColorBarClassName = () => {
    let colored;
    if (type === "iphone") {
      if (color === 'blue') colored = classes.iBlue;
      if (color === 'green') colored = classes.iGreen;
      if (color === 'violet') colored = classes.iViolet;
    } else if (type === "paper") {
      if (color === 'orange') colored = classes.paperOrange;
      if (color === 'green') colored = classes.paperGreenLight;
      if (color === 'blue') colored = classes.paperBlueLight;
    }
    return colored;
  }

  const getContainerClassName = () => {
    let root = classes.iphoneRoot;
    if (type === "paper") {
      root = classes.paperRoot;
    }
    return root;
  }

  return (
    <Box p={1} mb={1}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
        <Typography className={classes.label}>{label}</Typography>
        <Typography className={classes.percent}>{value}%</Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        color="secondary"
        value={completed}
        classes={{ 
          root: getContainerClassName(), 
          bar: clsx(
            getColorBarClassName(), 
            type ==="iphone"? classes.iphoneBar: classes.paperBar
          ) 
        }}
        style={{ width: width ? `${width}%`: '100%'}}
      />
    </Box>
  );
}

export default IphoneProgress;