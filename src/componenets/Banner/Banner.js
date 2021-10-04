import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import banner from '../Banner/banner.jpg';
import './Banner.css'

const Banner = () => {
    const bannerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left'
    }

    const history = useHistory();
    const handleCourses = () =>{
        history.push('/courses');
    }
    return (
        <Box sx={bannerStyle}>
            <div style={{width: '55%'}}>
                <img style={{width: '100%'}} src={banner} alt="" />
            </div>
            <div>
                <h2><span className='spanned'>Coding</span> is Fun.It's not that kind of hard as we think.</h2>
                <h3>If you want to learn any <span className='spanned'>programming</span> language, <br /> go to courses.</h3>
                <Button onClick={handleCourses} variant='contained'>Courses</Button>
            </div>
        </Box>
    );
};

export default Banner;