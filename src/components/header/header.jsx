import React from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem'


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <CssBaseline />
        <AppBar position="static">
          <Toolbar variant="dense">
            <div className="header-title">
              Title
            </div>
          </Toolbar>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuItem />
          </IconButton>
        </AppBar>
      </div>
    );
  }
}

export default Header;