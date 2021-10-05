import { Box } from '@mui/system';
import React from 'react';
import about from './about.jpg';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const About = () => {
    return (
        <Box sx={{display: 'flex',justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Box sx={{textAlign: 'left'}}>
                <h1 className='spanned'>About Us</h1>
                <p><CheckCircleOutlineIcon></CheckCircleOutlineIcon>&nbsp;We provide good quality tutorials with realistic example</p>        
                <p><CheckCircleOutlineIcon></CheckCircleOutlineIcon>&nbsp;We have skilled trainers.</p>
                <p><CheckCircleOutlineIcon></CheckCircleOutlineIcon>&nbsp;We organize special bootcamp sessions.</p>
                <p><small>and many more...</small></p>
            </Box>
            <Box sx={{width: '45%'}}>
                <img style={{width: '100%'}} src={about} alt="" />
            </Box>
        </Box>
    );
};

export default About;