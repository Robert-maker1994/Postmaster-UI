import React from 'react';
import {Link} from 'react-router-dom'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {AppBar ,Box,  Toolbar, Drawer, IconButton, Divider,   ListItemText, ListItem} from '@material-ui/core';

//Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import { about, home, blog } from './Routing';
import { purple } from '@material-ui/core/colors';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const drawerWidth = 240;


const useStyles = makeStyles((myTheme) => ({
    
    navBar: {
   
        transition: myTheme.transitions.create(['margin', 'width'], {
          easing: myTheme.transitions.easing.sharp,
          duration: myTheme.transitions.duration.leavingScreen,
        }),
      },
      navBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: myTheme.transitions.create(['margin', 'width'], {
          easing: myTheme.transitions.easing.easeOut,
          duration: myTheme.transitions.duration.enteringScreen,
        }),
      },
      link: {
        textDecoration: "none",
        padding: "0 40px ",
        color: "#fff",
      },
    drawer: {
      
      width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: purple,
        padding: myTheme.spacing(0, 1),
        ...myTheme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: myTheme.spacing(3),
        transition: myTheme.transitions.create('margin', {
          easing: myTheme.transitions.easing.sharp,
          duration: myTheme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: myTheme.transitions.create('margin', {
          easing: myTheme.transitions.easing.easeOut,
          duration: myTheme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
 
}));



export default function BurgarNav() {
  const classes = useStyles();
  const myTheme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <div>
    <div className={classes.nav}>
            {/* NavBar */}
            <AppBar  position="sticky"
                className={clsx({
                [classes.navBarShift]: open,
                })}
            > 
            <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon padding={4}/>
          </IconButton>
         
        </Toolbar>
            {/* Search Bar  */}
            <Box ml='auto'>
        <a className={classes.link} rel="noreferrer"  href='https://www.linkedin.com/in/robert-lawson-85058a183/' target="_blank"><LinkedInIcon  /></a>
       <a className={classes.link} rel="noreferrer"  href="https://twitter.com/" target="_blank"><TwitterIcon  /></a>
       </Box>
          {/* <SearchBar /> */}
            </AppBar>  

             {/* Styling of the Menu */}
            <Drawer
                className={classes.drawer}
                color="primary.main"
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
            
                {/* Drawer Left side  */}
                 <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {myTheme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    </div>
                        <Divider />
                            <ListItem button component={Link} to={home}>
                                <ListItemText 
                                primary="Home" 
                                />
                            </ListItem>
                        <Divider />
                            <ListItem button component={Link} to={blog}>
                                <ListItemText 
                                  primary="Blog"
                                  />
                              </ListItem>
                          
                          <Divider />
                            <ListItem button component={Link} to={about}>
                              <ListItemText 
                                primary="About us"  
                                />
                            </ListItem>
                          <Divider />
                          
        
                     </Drawer>
            </div>
    </div>
  );
}