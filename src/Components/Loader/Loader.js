import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    height: '100vh'
  },
 
}));

export default function Loader() {
  const classes = useStyles();
  const margin = useMediaQuery('(min-width:600px, margin: 100px )');

  return (
    <div className={classes.root}>
      <div className={classes.loader }>
      <CircularProgress disableShrink 
        thickness={3}  
        size={200}
        {...margin}
      />
      <Typography variant='h2' color="primary">Loading</Typography>
      </div>
   
    </div>
  );
}