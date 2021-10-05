import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png'



const Header = () => {
    const logoStyle = {
        width: 100,
      }
    const headerStyle = {
        position: 'sticky',
        left: 0,
        top: 0,
        backgroundColor: 'white',
        zIndex: 999,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const navlinkStyle = {
        textDecoration:'none',
        color: '#5E17EB',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 16
    }
    return (
        <Box sx={headerStyle}>
            <div>
                <img style={logoStyle} src={logo} alt="" />
            </div>
            <div>
                <NavLink style={navlinkStyle} to="/">Home</NavLink>
                <NavLink style={navlinkStyle} to="/about">About</NavLink>
                <NavLink style={navlinkStyle} to="/courses">Courses</NavLink>
                <NavLink style={navlinkStyle} to="/contact">Contact</NavLink>

            </div>
        </Box>
    );
};

export default Header;