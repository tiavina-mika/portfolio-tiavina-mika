import React from 'react';
import clsx from 'clsx';
import { motion } from "framer-motion";
import { render } from 'react-dom'
import { useTrail, animated } from 'react-spring'
// import '../main1.css'
import './names.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    name:  {
        background: '-webkit-linear-gradient(white, #38495a)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '75px',
        marginTop: 0,
        fontFamily: 'Comfortaa',
        textTransform: 'uppercase',
        
    },
    name2: {
      marginTop: -35
    }
})
// const items = ['Tiavina', 'Michael', 'Ralainirina', 'Full-Stack Web/mobile Developer']
// const config = { mass: 5, tension: 2000, friction: 200 }

// function Names() {
//   const trail = useTrail(items.length, {
//     config,
//     opacity: 1,
//     x:  0,
//     height: 80,
//     from: { opacity: 0, x: 20, height: 0 },
//   })
//   const classes = useStyles();

//   return (
//     <div>
//       <div>
//         {trail.map(({ x, height, ...rest }, index) => (
//           <animated.div
//             key={items[index]}
//             className="trails-text"
//             style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
//             <animated.div style={{ height }}>
//                 <h1 className={index !== trail.length - 1 ? classes.name : classes.post}>
//                     {items[index]}
//                 </h1>
//             </animated.div>
//           </animated.div>
//         ))}
//     </div>
//     </div>
//   )
// }
const name = 'Tiavina Michael Ralainirina';

const Names = () => {
  const classes = useStyles();
  return (
    <div>
      {name.split(' ').map((n, i) => {
        return (
          <motion.h1
            className={clsx(classes.name, i != 0 && classes.name2)}
            initial={{ marginLeft: -5000 }}
            animate={{ marginLeft: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >  
            <span>
              {n}
            </span>
        </motion.h1>
        )
      })
      }
    </div>
  )
}

export default Names;
