import React, { useState } from 'react';
import clsx from 'clsx';

// msterial-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';

import { useStyles } from './header.styles';

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  // const { pageTitle } = this.props;

  const handleDrawer = () => {
    setOpen(!open);
  }

  return (
    <div className={classes.header}>
      <CssBaseline />
      <AppBar 
        position="fixed" 
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Title
          </Typography>
          <IconButton 
            edge="end" 
            color="inherit" 
            aria-label="open-drawer"
            className={clsx(open && classes.hide)}
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main 
        className={clsx(classes.content, {
        [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          pageTitle
        </Typography>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            {/* {theme.direction === 'rtl' ? ChevronLeftIcon : ChevronRightIcon} */}
            {theme.direction === 'rtl' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
          </IconButton>
        </div>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
