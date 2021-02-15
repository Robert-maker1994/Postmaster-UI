import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container  } from '@material-ui/core';


const BoxContainer = withStyles({
 
  root: {
    display: 'grid',
    boxShadow: '0 3px 5px 2px purple',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Container);

export default function BoxContain(props) {

  return <BoxContainer >{props.children}</BoxContainer>;
}

