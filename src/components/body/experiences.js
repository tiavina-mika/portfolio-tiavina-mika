import React from 'react';
import Box from '@material-ui/core/Box';
import Title from './experiences/title';
import Experience from './experiences/experience';
import List from './experiences/list';
import { poesia } from '../../data/technos';
import { experiences } from '../../utils/data';

const Experiences = () => {

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
                <Box py={3}>
                    <Box pl={5} pt={4}>
                        <Title text="Expérience Professionnelles" size={40} />
                    </Box>
                    <img src={`${process.env.PUBLIC_URL}/images/experience.png`} alt="header" style={{width: '100%'}}/>
                </Box>
                <Box width="80%" mt={8}>
                    <Experience src={`${process.env.PUBLIC_URL}/images/web-01.jpg`} technos={poesia}>
                        { experiences.map(experience => <List {...experience}/>) }
                    </Experience>
                </Box>
        </Box>
    );
}

export default Experiences;
