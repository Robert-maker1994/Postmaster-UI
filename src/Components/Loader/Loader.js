import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    height: '100vh'
  },
  loader: {
      margin: "250px auto", 
  }
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.loader }>
      <CircularProgress disableShrink 
        thickness={3}  
        size={200}
      />
      <Typography variant='h2' color="primary">Loading</Typography>
      </div>
   
    </div>
  );
}