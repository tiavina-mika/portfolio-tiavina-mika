import React from "react";
import { makeStyles, darken } from "@material-ui/core/styles";

const useStyles = makeStyles({
    progressValue: {
      strokeDasharray: '284',
      fill:"none",
      stroke:"#31BCB1",
      strokeWidth:"12",
      strokeLinecap: 'round'
    },
    inactive: {
      fill:"none" ,
      stroke:"none",
      strokeLinecap: 'round',
      strokeWidth:"12",
    },
    circleIn: {
      fill:"url(#gradient)" ,
      stroke:"#31BCB1",
      strokeLinecap: 'round',
      strokeWidth:"0.4",
    },
});

const SpinnerOnWheel = ({ active }) => {
  const classes = useStyles();

  return (
        <svg 
            style={{transform:"rotate(180deg)"}}
            viewBox="0 0 115 115" 
            height="100" 
            width="100"
        >
            <circle 
              className={classes.progressValue} 
              cx="60" 
              cy="60" 
              r="45"  
              strokeDashoffset={active}
            />            
            <circle
              cx="60"
              cy="60"
              r="45"
              className={classes.inactive} 
            />

             { active >= 284 && 
             <g>
               <defs>
                <radialGradient id="gradient" cx="50%" cy="50%" r="55%">
                    <stop stopColor="transparent" offset="0%" />
                    <stop stopColor="#31BCB1" offset="20%" />
                    <stop stopColor={`${darken('#31BCB1', 0.6)}`} offset="90%" />
                    <stop stopColor={`${darken('#31BCB1', 0.1)}`} offset="100%" />
                </radialGradient>
               </defs>

              <circle 
                    className={classes.circleIn} 
                    cx="60" 
                    cy="60" 
                    r="44"  
                  >
                    <animate
                      attributeName="r" 
                      dur="1s" 
                      from="44"
                      to="45" 
                      repeatCount="indefinite" />
                  </circle>
              </g>
              }
        </svg>
  );
};

export default SpinnerOnWheel;
