import React from 'react';
import { connect } from 'react-redux';
import { setOpen } from '../../redux/modal/modal.actions';


import Modal from '@material-ui/core/Modal';

import image from '../../assets/images/IMG_3249.jpeg';
import { useStyles } from './modal.styles';

const ProfileModal = ({ open, toggleModal }) => {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <img className={classes.profileImg} src={image} alt="profile" />
      <p>モーダル</p>
    </div>
  );

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={toggleModal}
        aria-labelledby="profile-modal"
      >
        {body}
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return { open: state.modalReducer.open };
}

const mapDispatchToProps = (dispatch) => {
  return { toggleModal: () => { dispatch(setOpen()) }}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileModal);