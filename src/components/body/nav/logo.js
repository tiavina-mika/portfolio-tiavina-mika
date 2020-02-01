import React from "react";
import { motion } from "framer-motion";
import { makeStyles, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        position: "relative",
        width: 50,
        height: 50,
        margin: 8,
    },
    mCharacter: {
      fill:'none',
      strokeLinecap:'round',
      strokeMiterlimit:10,
      strokeWidth:'3.5px'
    }
});

const Logo = ({ dark }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="50" 
        height="50.25" 
        viewBox="0 0 50 50.25">
          <motion.g 
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              flip: Infinity,
              repeatDelay: 5
            }}
          >
              <g id="Circle" data-name="Circle">
                <path 
                  fill={dark? '#fff': lighten('#403b41', 0.3)}
                  d="M25,1A24,24,0,1,1,1,25,24,24,0,0,1,25,1m0-1h0A25.07,25.07,0,0,0,0,25H0A25.07,25.07,0,0,0,25,50h0A25.07,25.07,0,0,0,50,25h0A25.07,25.07,0,0,0,25,0Z"
                />
              </g>
            <motion.g
                animate={{ rotate: 360 }}
                transition={{
                  ease: "easeInOut",
                  flip: Infinity,
                  repeatDelay: 5,
                  duration: 2
                }}
            >
              <g id="T_Charcter" data-name="T Charcter">
                <path
                  fill={dark? '#fff': lighten('#403b41', 0.3)} 
                  d="M13.21,16.14H6.66a1.85,1.85,0,0,1-1.85-1.85h0a1.85,1.85,0,0,1,1.85-1.85H27.91a1.85,1.85,0,0,1,1.85,1.85h0a1.85,1.85,0,0,1-1.85,1.85h-6.6A1.85,1.85,0,0,0,19.46,18v26.3a1.85,1.85,0,0,1-1.85,1.85h-.7a1.85,1.85,0,0,1-1.85-1.85V18A1.85,1.85,0,0,0,13.21,16.14Z"/>
              </g>
              <g id="M_Charcter" data-name="M Charcter">
                <path 
                  stroke={dark? '#fff': lighten('#403b41', 0.3)}
                  className={classes.mCharacter}
                  d="M25.42,45.5c-2.5-2.57-3.18-7.07-3.34-9.44-.32-4.73.27-8.36,2.51-10.29,1.33-1.15,3.59-1.74,5-.86a5.12,5.12,0,0,1,1.67,2.58,5.72,5.72,0,0,1,0,3.43c.26,3.53-.84,11.15-.84,13.72,0,1.28-.83-12,2.51-18.87a3,3,0,0,1,2.5-1.72c2.42-.45,4.59,2.09,5,2.58a10.37,10.37,0,0,1,1.67,10.29,13.25,13.25,0,0,1-6.68,6.86"/>
              </g>
              </motion.g>
          </motion.g>
          <g id="Layer_4" data-name="Layer 4">
            <rect x="0.25" y="38" width="2.5" height="12" rx="1" fill={dark? '#fff': lighten('#403b41', 0.3)} />
          </g>
          <g id="Layer_4_copy" data-name="Layer 4 copy">
            <rect x="42.5" y="43" width="2.5" height="12" rx="1" transform="translate(-5.25 92.75) rotate(-90)" fill={dark? '#fff': lighten('#403b41', 0.3)}/>
          </g>
          </svg>
    </div>
  );
};

export default Logo;