import React from 'react'
import Motion from '../../../../components/motionYoyo';
import Blob from './blob';

function getRandomIntInclusive(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
const BackgroundBlob = () => {
  return (
    [0, 1, 2 , 3, 4, 5].map(n => (
        // <Motion
        //     style={{
        //         background: `url(${process.env.PUBLIC_URL}/images/bubble-blue-${n}.png) right top`,
        //         backgroundSize: 'cover',
        //         backgroundRepeat: 'no-repeat',
        //         position: 'relative',
        //         height: 50,
        //         width: 50,
        //         // top: getRandomIntInclusive(window.innerHeight),
        //         // left: getRandomIntInclusive(window.innerWidth),
        //     }}
        //     animate={{ marginTop: getRandomIntInclusive(10 * n) }}
        //     duration={2}
        //  />
         <Blob
            size={75}
            style={{ 
                boxShadow: 'inset 0px 0px 40px rgba(0,0,0,.2), 0 0 90px rgba(0,0,0,.8)', 
                zIndex:20, 
                // top: `${getRandomIntInclusive(20 * (n + 1))}%`, 
                backgroundColor: '#01cfcf'
            }} 
        />
    ))
  )
  
}

export default BackgroundBlob;