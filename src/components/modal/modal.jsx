import React, { useState } from 'react';

import Modal from '@material-ui/core/Modal';
import { useTheme } from '@material-ui/core/styles';

import { useStyles } from './modal.styles';
import image from '../../assets/images/IMG_3249.jpeg';

export default function ProfileModal(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  // const { path } = this.props;

  const handleModal = () => {
    setOpen(!open);
  }

  const body = (
    <div className={classes.paper}>
      <img src={image} />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="profile-modal"
      >
        {body}
      </Modal>
    </div>
  );
}