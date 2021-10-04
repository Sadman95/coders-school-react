import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'lightGray',
        padding: '32px 0',
        display: 'flex',
        justifyContent: 'space-evenly',
        textAlign: 'left',
        fontWeight: 'bold'
    }
    const logoStyle = {
        width: 100,
      }
    return (
        <Box sx={footerStyle}>
            <div>
                <img style={logoStyle} src={logo} alt="" />
            </div>
            <Box sx={{color: 'navy'}}>
                <p>Go To</p>
                <ul>
                    <li><Link className='listLink' to='/about'>About Us</Link></li>
                    <li><Link className='listLink' to='/courses'>Courses</Link></li>
                    <li><Link className='listLink' to='/trainers'>Trainers</Link></li>
                    <li><Link className='listLink' to='/contact'>Contact</Link></li>
                </ul>
            </Box>
            <Box sx={{color: 'navy'}}>
                <p>Supports</p>
                <ul>
                    <li><Link className='listLink' to='/processing'>Video Lectures</Link></li>
                    <li><Link className='listLink' to='/processing'>Bootcamps</Link></li>
                    <li><Link className='listLink' to='/processing'>Projects</Link></li>
                    <li><Link className='listLink' to='/processing'>GitHub</Link></li>
                </ul>
            </Box>
            
            <ul>
                <p>Follow us</p>
                <Box sx={{listStyle: 'none',display: 'flex'}}>
                    <li><Link to='https://www.facebook.com/s.sadman.9/'><FacebookIcon></FacebookIcon></Link></li>
                    <li><Link to='https://www.linkedin.com/in/sadman-sakib-082083201'><LinkedInIcon></LinkedInIcon></Link></li>
                    <li><Link to='https://github.com/Sadman95?tab=repositories'><GitHubIcon></GitHubIcon></Link></li>
                </Box>
            </ul>
        </Box>
    );
};

export default Footer;