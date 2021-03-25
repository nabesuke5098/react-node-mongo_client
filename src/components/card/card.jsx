import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Content from '../card-content/card.content';

import ProfileModal from '../modal/modal';

import image from '../../assets/images/IMG_3249.jpeg';
import { useStyles } from './card.styles';

export default function ContentCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea ocClick={alert('modal')}>
        <CardMedia
          className={classes.media}
          image={image}
          title="image"
        />
      </CardActionArea>
      <Content />
    </Card>
  )
}