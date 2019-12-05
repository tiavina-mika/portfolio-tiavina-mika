import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture';

const cards = [
    "/me2.jpg",
    "/me3.jpg",
    "/me5.jpg",
    "/me6.jpg",
];

const useStyles = makeStyles({
    body: {
        overscrollBehaviorY: 'contain',
        margin: 0,
        padding: 0,
        height: '100%',
        userSelect: 'none',
        position: 'fixed',
        overflow: 'hidden',
    },
    root: {
        overflow: 'hidden',
        cursor: `url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto`,
        '& div': {
            position: 'absolute',
            width: '25vw',
            height: '75vh',
            willChange: 'transform',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            '& div': {
                backgroundColor: 'white',
                backgroundSize: 'auto 75%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '45vh',
                maxWidth: '350px',
                height: '85vh',
                maxHeight: '570px',
                willChange: 'transform',
                borderRadius: '10px',
                boxShadow: '0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)',
            }
        }
    }
});

const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const Card = () => {
  const [gone] = useState(() => new Set()) ;
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) ;
  const classes = useStyles();

  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 ;
    const dir = xDir < 0 ? -1 : 1;
    if (!down && trigger) gone.add(index);
    set(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 ;
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) ;
      const scale = down ? 1.1 : 1 ;
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600);
  })

  useEffect(() => {
    document.getElementsByTagName('html')[0].classList.remove(classes.body);
    return document.getElementsByTagName('html')[0].classList.remove(classes.body);
  }, [classes.body])
  useEffect(() => {
    document.body.classList.add(classes.body);
    return document.body.classList.remove(classes.body);
  }, [classes.body])

  return props.map(({ x, y, rot, scale }, i) => (
        <div className={classes.root}>
            <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
                <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
            </animated.div>
        </div>
  ))
}

export default Card;
