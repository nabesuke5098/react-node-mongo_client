import React from 'react';
import { connect } from 'react-redux';
import { setOpen } from '../../redux/modal/modal.actions';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Content from '../card-content/card.content';

import image from '../../assets/images/IMG_3249.jpeg';
import { useStyles } from './card.styles';

const ContentCard = ({ toggleModal }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => toggleModal}>
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

const mapStateToProps = state => {
  return { open: state.open }
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal() { dispatch(setOpen) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentCard);