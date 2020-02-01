import React, { useRef } from 'react'
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import clamp from 'lodash-es/clamp'
import swap from 'lodash-move'
import { Link } from 'react-router-dom'
import { useGesture } from 'react-use-gesture'
import { useSprings, animated, interpolate } from 'react-spring'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const fn = (order, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' }
    : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const useStyles = makeStyles({
    box: {
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      height: '75px',
      width: '100%'
    },
    cursor: {
      cursor: `url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39, auto`,
    },
    iconButton: {
      marginRight: 5,
      color: '#fff'
    },
    content: {
      position: 'relative',
      width: '320px',
      height: '240px',
    },
    animated: {
      position: 'absolute',
      width: '320px',
      height: '75px',
      pointeEvents: 'auto',
      transformOrigin: '50% 50% 0px',
      color: 'white',
      overFlow: 'hidden',
      borderRadius: 8
    },
    link: {
      fontSize: 20,
      cursor: 'pointer',
      color: '#fff',
      textDecoration: 'none'
    }
});

const gradients = [
  ['#f6d365', '#fda085'],
  ['#f093fb', '#f5576c'],
  ['#5ee7df', '#b490ca'],
  ['#c3cfe2', '#c3cfe2'],
  ['#288e09', '#419160']
];

const MenuItem = ({ items, open }) => {
  const classes = useStyles();

  const order = useRef(items.map((_, index) => index));
  const [springs, setSprings] = useSprings(items.length, fn(order.current));
  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
      const curIndex = order.current.indexOf(originalIndex)
      const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
      const newOrder = swap(order.current, curIndex, curRow)
      setSprings(fn(newOrder, down, originalIndex, curIndex, y));
      if (!down) order.current = newOrder
  });

  return (
    <div className={classes.content} style={{ height: items.length * 100 }}>
        { springs.map(({ zIndex, shadow, y, scale }, i) => (
          <animated.div
              {...bind(i)}
              key={i}
              style={{
                  zIndex,
                  boxShadow: open? shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`): 'none',
                  transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`),              
              }}
              className={classes.animated}
            >
              <motion.div
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(classes.box, open? classes.cursor: '')}
              >
                <Box 
                  display="flex" 
                  flexGrow={1}
                  pl={2}
                  alignItems="center" 
                  height="75px" 
                  style={{ background: 
                    `linear-gradient(135deg, ${gradients[getRandomInt(0, gradients.length-1)][0]} 0%, ${gradients[getRandomInt(0, gradients.length-1)][1]} 100%)`
                  }}
                  borderRadius={8}>
                    <IconButton className={classes.iconButton}>
                        {items[i].icon}
                    </IconButton>
                    {items[i].external
                      ? <a href={items[i].url} className={classes.link} alt={items[i].url}>{items[i].text}</a>
                      : <Link className={classes.link} to={items[i].url}>
                            {items[i].text}
                        </Link>
                    }

                </Box>
              </motion.div>
          </animated.div>
        ))}
      </div>
  
    )
};

export default MenuItem;