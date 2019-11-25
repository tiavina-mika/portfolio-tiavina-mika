import React, { useState, useEffect } from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useSpring, animated } from "react-spring";
import { easeBounceOut } from "d3-ease";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    circle: {
        fill: 'none',
        strokeWidth: 2.8,
        stroke: 'mediumseagreen',
    },
    circleBg:  {
        fill: 'none',
        stroke: 'rgba(0, 0, 0, 0.1)',
        strokeWidth: '3.8',
    },
    percentage: {
        textAnchor: 'middle',
        fontFamily: 'Muli',
        fontSize: 8
    },
    loadingText: {

    }
})

const circlePath = `M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831`;

const svgConfig = { easing: easeBounceOut, duration: 2500 };

const Wheel = ({ title, stroke, otherStroke }) => {
    const classes = useStyles();
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box>
              <svg viewBox="0 0 36 36" className="wheel" width="100">
                  <path className={classes.circleBg} d={circlePath} />
                  <animated.path
                      className={classes.circle}
                      strokeDasharray={otherStroke}
                      d={circlePath}
                  />
                  <animated.text x="18" y="20.35" className={classes.percentage}>
                      {stroke}
                  </animated.text>
              </svg>
          </Box>
          <Box>
              <Typography variant="subtitle1" className={classes.loadingText}>{title}</Typography>
          </Box>
      </Box>
    )
}

const Loading = ({completed}) => {
    const [active, set] = useState(false);

    useEffect(() => {
      completed !== 100 && set(true)
    }, [])

  const props3 = useSpring({
    stroke: active ? 100 : 0,
    otherStroke: active ? "100, 100" : "0,100"
  });

  return (
    <Box display="flex" justifyContent="center" height="100vh" alignItems="center">
      <Wheel
        title="Loading..."
        stroke={props3.stroke.interpolate(x => Math.round(x))}
        otherStroke={props3.otherStroke}
        completed={completed}
      />
    </Box>
  );
}

export default Loading;
