import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
const Enrolled = () => {
    const textStyle= {
        display: 'inline-block',
        padding: 2,
        margin: 2,
        border: 1,
        borderRadius: 1,
        borderColor: 'grey.500'}
    return (
        <Box>
            <Typography sx={textStyle} variant="h3">
                Succesfully enrolled!!!
            </Typography>
        </Box>
    );
};

export default Enrolled;