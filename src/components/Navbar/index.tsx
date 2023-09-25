import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1,textAlign: 'center'}}>
            Dados
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Navbar;