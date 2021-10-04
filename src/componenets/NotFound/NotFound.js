import { Alert, AlertTitle, Stack } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>404</AlertTitle>
        <strong>Page Not Found!</strong>
      </Alert>
    </Stack>
  );
};

export default NotFound;
