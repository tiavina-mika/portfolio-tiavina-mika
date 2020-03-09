import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const BorderLinearProgress = withStyles({
  root: {
    height: 35,
    backgroundColor: '#E2E7EE',
  },
  bar: {
    // borderRadius: 7,
  },
})(LinearProgress);

const useStyles = makeStyles({
  activeBarGreen: {
    backgroundColor: '#1D826F'
  },
  activeBarBlue: {
    backgroundColor: '#0072ED'
  },
  percentContainer: {
    marginLeft: -45,
    marginRight: 20,
    zIndex: 10,
    width: 30,
  },
  percent: {
    fontWeight: 600,
  },
  emptyPercent: {
    color: '#828282',
  },
  fullPercent: {
    color: '#fff',
  },
  label: {
    color: '#fff',
    fontSize: 18
  },
  labelGreen: {
    width: 150,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#1EB47C'
  },
  labelBlue: {
    width: 150,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#009bc1'
  },
});

const LabeledProgress = ({ value, label, color }) => {
  const classes = useStyles();
  const [completed, setCompleted] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => setData(value), [value]);

  useEffect(() => {
    const progress = max => setCompleted(max);
    progress(data)
  }, [data]);

  const getLabelColor = () => {
      let colored;
      if (color === 'blue') colored = classes.labelBlue;
      if (color === 'green') colored = classes.labelGreen;

      return colored;
  }
  const getBarColor = () => {
    let colored;
    if (color === 'blue') colored = classes.activeBarBlue;
    if (color === 'green') colored = classes.activeBarGreen;

    return colored;
}
  return (
    <Box display="flex" alignItems="center" my={1} p={1}>
      <Box display="flex" justifyContent="space-between" alignItems="center" className={getLabelColor()}>
        <Typography className={classes.label}>{label}</Typography>
      </Box>
      <BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={completed}
        classes={{ bar: getBarColor() }}
        style={{width: '100%'}}
      />
      <Box className={classes.percentContainer}>
          <Typography className={clsx(
            classes.percent, 
            value <= 90? classes.emptyPercent: classes.fullPercent
          )}>
            {value}%
          </Typography>
      </Box>

    </Box>
  );
}

export default LabeledProgress;