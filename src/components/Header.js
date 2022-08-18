import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
  return (
    <AppBar
      sx={{
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(42,21,39,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        <Box display="flex" marginLeft="auto">
          <Button variant='contained' sx={{margin:1, borderRadius:10}} color="warning">Login</Button>
          <Button variant='contained' sx={{margin:1, borderRadius:10}} color="warning">Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
