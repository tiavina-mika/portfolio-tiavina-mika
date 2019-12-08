import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    img: {
        position:"absolute",
        transformOrigin: 'center'
    }
});

const Image = ({ pauseResume, paused }) => {
    const classes = useStyles();

    return (
         <image
            href={`${process.env.PUBLIC_URL}/profile.png`}
            height="70"
            width="70"
            y="115"
            x="115"
            className={classes.img}
            onClick={pauseResume}
        >
            {   !paused 
                    ? <animateTransform 
                        attributeName="transform" 
                        type="rotate" 
                        from="0" to="360" begin="0" dur="4s" 
                        repeatCount="indefinite" 
                    /> 
                    : null
            }
        </image>
    );
};

export default Image;
