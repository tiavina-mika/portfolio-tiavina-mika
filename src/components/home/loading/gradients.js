import React from "react";
import { darken } from "@material-ui/core/styles";

const Gradients = () => {
    return (
        <defs>
            <radialGradient id="gradientOutActive" cx="50%" cy="50%" r="55%">
                <stop stopColor="transparent" offset="0%" />
                <stop stopColor="#ff3f3f" offset="40%" />
                <stop stopColor={`${darken('#ff3f3f', 0.8)}`} offset="90%" />
                <stop stopColor="#000" offset="100%" />
            </radialGradient>
            <radialGradient id="gradientOutCompleted" cx="50%" cy="50%" r="55%">
                <stop stopColor="transparent" offset="0%" />
                <stop stopColor="#4dd300" offset="40%" />
                <stop stopColor={`${darken('#4dd300', 0.8)}`} offset="90%" />
                <stop stopColor="#000" offset="100%" />
            </radialGradient>
            <radialGradient id="gradientOutActiveAnimate" cx="50%" cy="50%" r="55%">
                <stop stopColor="transparent" offset="0%" />
                <stop stopColor="#fff" offset="40%" />
                <stop stopColor="#000" offset="90%" />
                <stop stopColor="#000" offset="100%" />
            </radialGradient>

            <radialGradient id="gradientIn" cx="50%" cy="50%" r="55%">
                <stop stopColor="#000" offset="0%" />
                <stop stopColor="#000" offset="40%" />
                <stop stopColor="#000" offset="90%" />
                <stop stopColor="#000" offset="100%" />
            </radialGradient>
        </defs>
  );
};

export default Gradients;
