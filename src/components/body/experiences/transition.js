import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { darken } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { useCountUp } from 'react-countup';

const Transition = () => {
    const [completed, setCompleted] = useState(false);
    const [started, setStarted] = useState(false);
    
    const onEnd1 = () => {
        setCompleted(false);
        setStarted(true);
    };
  
    const { countUp: countUp1 } = useCountUp({ end: 50, duration: 3, delay: 2, onEnd: onEnd1  });
    const { countUp: countUp2 } = useCountUp({ end: 100, duration: 3, delay: 5});

    const handleCompleted = () => setCompleted(true);

    return (
        <Box >
            <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutDown' afterAnimatedIn={handleCompleted}>
                <Box bgcolor="#000" height="calc(50vh - 1px)"></Box>
            </ScrollAnimation>

            { completed
                ?  <Box display="flex" justifyContent="center" bgcolor="#000">
                        <Box bgcolor={darken("#fff", 0.5)} width={`${countUp1}%`} height={2}></Box> 
                    </Box>
                : null
            }
            { started
                ?  <Box display="flex" justifyContent="center" bgcolor="#000">
                        <Box display="flex" justifyContent="center" bgcolor="green" width="50%" alignItems="center">
                            <Box bgcolor="#00e7ea" width={`${countUp2}%`} height={2}></Box> 
                            <Box bgcolor={darken("#fff", 0.5)} width={`${100 - countUp2}%`} height={2}></Box> 
                        </Box>
                    </Box>
                : null

            }
            
            <ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutUp'>
                <Box bgcolor="#000" height="calc(50vh - 1px)"></Box>
            </ScrollAnimation>
        </Box>
    );
}

export default Transition;
