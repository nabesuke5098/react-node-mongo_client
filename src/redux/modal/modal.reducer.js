import ModalActionTypes from './modal.types';

const INITIAL_STATE = {
  is_img_opened: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ModalActionTypes.IMG_MODAL_TOGGLE:
      return !state.open;
    default:
      return state;
  }
};

export default modalReducer;