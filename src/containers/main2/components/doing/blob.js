import React from 'react'
import { Blob } from 'react-blob'

const BackgroundBlob = ({size, style, content, props}) => {
const { fontSize = 60, backgroundColor = '#273040', zIndex = 5 } = style;
  return <Blob size={`${size}px`}
    style={{
        position: 'absolute',
        // top: '-15%',
        // right: '-15%',
        // right: '-15%',
        zIndex: zIndex,
        backgroundColor: {backgroundColor},
        color: 'white',
        // opacity: 0.05,
        opacity: 0.8,
        fontSize: {fontSize},
        ...style
    }}>
    {content}
    {/* {...props} */}
  </Blob>
}

export default BackgroundBlob;