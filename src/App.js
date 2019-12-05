import React, { useState, useCallback, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import Body from './containers/body';
import Home from './containers/home';
import Loading from './components/home/loading';

const pages = [
  // ({ style, onClick }) => <animated.div style={{ ...style, }}> <Home onClick={onClick}/></animated.div>,
  // ({ style, onClick }) => <animated.div style={{ ...style, }}> <Main2  onClick={onClick}/></animated.div>,
];

const App = () => {
    const [index, set] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      const progress = () => {
        setCompleted(oldCompleted => {
          const diff = Math.random() * 10;
          return Math.round(Math.min(oldCompleted + diff, 100));
        });
      }

      const timer = setInterval(progress, 100);
      return () => {
        clearInterval(timer);
      };
    }, []);

    // const onClick = useCallback(() => set(state => (state + 1) % 2), []);
    const onClick = () => setOpen(!open);
    const transitions = useTransition(index, p => p, {
      from: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
      enter: { opacity: 1, transform: 'translate3d(0,0%, 0)' },
      leave: { opacity: 0, transform: 'translate3d(0,50%,0)' },
    });

    // return (
    //       completed !== 100
    //       ? <Loading completed={completed}/>
    //       : <div className="simple-trans-main">
    //           { transitions.map(({ item, props, key }) => {
    //               const Page = pages[item];
    //               return <Page key={key} style={props} onClick={onClick}/>
    //           })}
    //         </div>
    // )
    
    return (
          // <div className="simple-trans-main">
          //     { transitions.map(({ item, props, key }) => {
          //         const Page = pages[item];
          //         return <Page key={key} style={props} onClick={onClick}/>
          //     })}
          //   </div>
          <>
          {!open
            ? <Home onClick={onClick} open={open}/>
            : <Body onClick={onClick} open={open}/>
          }
          
          
          </>
    )
}

export default App;


