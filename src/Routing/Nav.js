import React from "react";
import { Link } from "react-router-dom";
import { about, blog, home } from "./Routing";
import { makeStyles } from "@material-ui/core/styles";

// Media Query
import useMediaQuery from "@material-ui/core/useMediaQuery";
//Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {  Box, Typography, AppBar, Toolbar } from "@material-ui/core";
import BurgarNav from "./burgerMenu";

const styles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    padding: "0 40px ",
    color: "#fff",
  },
  logo: {
    width: "280px",
    height: "100px",
    justifyContent: "left",
  },
}));




function Nav() {
  const style = styles();


if (useMediaQuery("(min-width:1000px")) {
  return (
    <AppBar position="sticky"
       >
    {/* <Box mr="auto">   
    <SearchBar
    ></SearchBar> 
    </Box>
       */}
      <Toolbar >
        <Link className={style.link} to={home}>
          <Typography>Home</Typography>
        </Link>
        <Link className={style.link} to={blog}>
          <Typography>Blog</Typography>
        </Link>
        <Link className={style.link} to={about}>
          <Typography>About us</Typography>
        </Link>
        </Toolbar>
        <Box ml='auto'>
        <a className={style.link} rel="noreferrer"  href='https://www.linkedin.com/in/robert-lawson-85058a183/' target="_blank"><LinkedInIcon  /></a>
       <a className={style.link} rel="noreferrer"  href="https://twitter.com/" target="_blank"><TwitterIcon  /></a>
       </Box>
      
      </AppBar>
  );
} else {
  return (
    <BurgarNav />
  )
}
}

export default Nav;
