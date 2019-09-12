import React from 'react';
import Motion from '../../../../components/motion';

const Line = () => {
    return (
        <Motion
            backgroundColor= '#1ABC9C'
            height= {10}
            width= {100}
            marginTop= {20}
            marginBottom= {20}
            initial={{ marginLeft: -5000 }}
            animate={{ marginLeft: 0 }}
            delay= {0.8}
        />
    );
}
  
export default Line;
  