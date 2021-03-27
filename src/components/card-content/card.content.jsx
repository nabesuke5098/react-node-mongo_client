import React from 'react';

import CardContent from '@material-ui/core/CardContent';

import { useStyles } from './card.content.styles';


export default function Content() {
  const classes = useStyles();

  return (
    <CardContent className={classes.content}>
      test text test text test text test text test text test text test text test text 
    </CardContent>
  )
}