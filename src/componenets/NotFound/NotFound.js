import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const NotFound = () => {
  const notFoundStyle= {
    position: 'fixed', 
    top: 0, 
    left:0,
    bottom:0, 
    right:0,
    zIndex:1000,
    backgroundColor: 'lightgrey'
  }
  return (
    <Box sx={notFoundStyle}>
      <Typography variant='h1'>404</Typography>
      <SentimentVeryDissatisfiedIcon/>
      <Typography variant='h5'>Page Not Found</Typography>
    </Box>
  );
};

export default NotFound;
