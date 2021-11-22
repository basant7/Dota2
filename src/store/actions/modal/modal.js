import { SHOW_MODAL, HIDE_MODAL } from '../../actionLabels';

export const showModal = payload => ({
  type: SHOW_MODAL,
  payload,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
