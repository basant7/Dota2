import * as actionLabels from '../../actionLabels';

const initialState = {
  open: false,
  title: '',
  message: '',
  withButton: true,
  buttonText: '',
  notifyType: 1,
  autoClose: true,
  redirectURL: '',
  buttonClick: undefined,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.SHOW_MODAL: {
      const modalData = {
        open: false,
        title: '',
        message: '',
        withButton: true,
        buttonText: '',
        notifyType: 1,
        autoClose: true,
        redirectURL: '',
        buttonClick: undefined,
      };
      modalData.message = payload.message;
      modalData.open = true;
      if (payload.title !== undefined || payload.title === true) {
        modalData.title = payload.title;
      }
      if (payload.withButton !== undefined || payload.withButton === true) {
        modalData.withButton = payload.withButton;
      }
      if (payload.buttonClick !== undefined || payload.buttonClick === true) {
        modalData.buttonClick = payload.buttonClick;
      }
      if (payload.buttonText !== undefined) {
        modalData.buttonText = payload.message;
      }
      if (payload.notifyType !== undefined) {
        modalData.notifyType = payload.notifyType;
      }
      if (payload.autoClose !== undefined) {
        modalData.autoClose = payload.autoClose;
      }
      if (payload.redirectURL !== undefined) {
        modalData.redirectURL = payload.redirectURL;
      }
      return {
        ...state,
        ...modalData,
      };
    }
    case actionLabels.HIDE_MODAL:
      return {
        open: false,
        title: '',
        message: '',
        withButton: true,
        buttonText: '',
        notifyType: 1,
        autoClose: true,
        redirectURL: '',
        buttonClick: undefined,
      };
    default:
      return state;
  }
};
