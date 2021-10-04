import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        width: 500,
        maxWidth: "100%",
      }}
    >
      <h1 className='spanned'>Get In Touch With Us</h1>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
      <TextField fullWidth label="Name" id="fullWidth" />
      <TextField fullWidth label="Email" id="fullWidth" />
      <TextField fullWidth label="Meassage" id="fullWidth" />
      </Box>  
      <Button sx={{margin: 3}} color="primary" variant="contained" endIcon={<SendIcon />}>Send</Button>
    </Box>
  );
};

export default Contact;
