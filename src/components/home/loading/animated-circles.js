import React from "react";
import clsx from "clsx";
import { makeStyles, darken } from "@material-ui/core/styles";

const useStyles = makeStyles({
    circleOut: {
      stroke: '#000',
      strokeMiterlimit: '10',
      strokeWidth: '2px',
    },
    circleOutActive: {
      fill: 'url(#gradientOutActive)',
      animation: '$setCircleOutBg 0.8s linear infinite forwards'
    },
    circleOutCompleted: {
      fill: 'url(#gradientOutCompleted)',
    },
    circleOutAnimated: {
      stroke: darken('#7f7f7f', 0.6),
      strokeWidth: 45,
      strokeDasharray: '75,2',
      transformOrigin: 'center', 
      position: 'absolute',
    },
    '@keyframes setCircleOutBg': {
      '100%': {
        fill: 'url(#gradientOutActiveAnimate)'
      }
    },
});

const AnimatedCircles = ({ countUp }) => {
    const classes = useStyles();

    return (
        <g id="animated">
            <circle cx={150}  cy={150} r={128} className={classes.circleOutAnimatedOffset} />
            <g>
                <circle cx={150}  cy={150} r={106} className={classes.circleOutAnimated}>
                    <animateTransform 
                        attributeName="transform" 
                        type="rotate" 
                        from="0" to="360" begin="0" dur="4s" 
                        repeatCount="indefinite" 
                    />
                </circle>
            </g>
            <circle
                cx={150}
                cy={150}
                r={120}
                className={clsx(
                    classes.circleOut,
                    countUp < 100 ? classes.circleOutActive: classes.circleOutCompleted
                )}
            />
        </g>
  );
};

export default AnimatedCircles;
