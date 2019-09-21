import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import Main3 from './containers/main2/main2';
import Main1 from './containers/main1/main1';
import './styles.css'

const pages = [
  ({ style, onClick }) => <animated.div style={{ ...style, }}> <Main1 onClick={onClick}/></animated.div>,
  ({ style, onClick }) => <animated.div style={{ ...style, }}> <Main3  onClick={onClick}/></animated.div>,
]

export default function App() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 2), [])
  const transitions = useTransition(index, p => p, {
    // from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    // enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    // leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    from: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0%, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0,50%,0)' },
  })
  return (
    // <div className="simple-trans-main" onClick={onClick}>
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props}  onClick={onClick}/>
      })}
    </div>
  )
}

// export default App;


