import React from 'react';
import Box from '@material-ui/core/Box';
import IphoneProgress from './iphone-progress';
import LabeledProgress from './labeled-progress';
import Title from './title';

const Competence = ({ title, data, barType }) => {
    const getIphoneProgress =  item => {
        return <IphoneProgress value={item.value} color={item.color} label={item.item} type={barType === "paper"? "paper": "iphone"}/>
    }
    return (
        <Box>
            <Title text={title} />
            { data && data.map(d => (
                d.color
                ? getIphoneProgress(d)
                : <LabeledProgress value={d.value} label={d.item}/>
            ))}
        </Box>
    )
}
  
export default Competence;  