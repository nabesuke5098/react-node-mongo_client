import React from 'react';
import { connect } from 'react-redux';
import { setOpen } from '../../redux/modal/modal.actions';


import Modal from '@material-ui/core/Modal';

import { useStyles } from './modal.styles';

const ProfileModal = ({ open, toggleModal }) => {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <p>モーダル</p>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={() => toggleModal}
        aria-labelledby="profile-modal"
      >
        {body}
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return { open: state.open }
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal() { dispatch(setOpen) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileModal);