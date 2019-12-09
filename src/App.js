import React, { useState, useCallback, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import Body from './containers/body';
import Home from './containers/home';
import Loading from './components/home/loading';
import { useCountUp } from 'react-countup';

const pages = [
  // ({ style, onClick }) => <animated.div style={{ ...style, }}> <Home onClick={onClick}/></animated.div>,
  // ({ style, onClick }) => <animated.div style={{ ...style, }}> <Main2  onClick={onClick}/></animated.div>,
];

const App = () => {
    const [open, setOpen] = useState(false);
    const [paused, setPaused] = useState(false);
    const [completed, setCompleted] = useState(false);

    const { countUp, pauseResume, start } = useCountUp({
        end: 100,
        duration: 3,
        onPauseResume: () => setPaused(!paused),
        onStart: () => paused === true && setPaused(false),
        onEnd: () => setTimeout(() => setCompleted(true), 800) ,
    });

    const onClick = () => setOpen(!open);

    return (
        <>
            {/* { completed
                ?   !open
                        ? <Home onClick={onClick} open={open}/>
                        : <Body onClick={onClick} open={open}/>
                :   <Loading countUp={countUp} pauseResume={pauseResume} start={start} paused={paused}/>
            } */}
            <Body onClick={onClick} open={true}/>
        </>
    )
}

export default App;


