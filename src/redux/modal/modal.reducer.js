import ModalActionTypes from './modal.types';

const INITIAL_STATE = {
  open: false,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ModalActionTypes.IMG_MODAL_TOGGLE:
      state = { open: !state.open };
      return state;
    default:
      return state;
  }
};

export default modalReducer;