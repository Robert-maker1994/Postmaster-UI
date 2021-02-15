import React, {  useState  } from "react";
 
// Styling
import { fade, makeStyles } from "@material-ui/core/styles";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import {  IconButton} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export default function SearchBar() {
  const classes = useStyles();
  const [searchField, setSearchField] = useState("");

  
  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  }


  return (
    <div>
      <div className={classes.search}>
        <InputBase
          inputProps={{ "aria-label": "search" }}
          placeholder="Search…"
          value={searchField}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={onSearchChange}
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton
          type="submit"
          
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        
      </div>
    
    </div>
  ); 
}
 
