import {
  SHOW_MODAL,
  ShowModalActionType,
  HIDE_MODAL,
} from "../types/modalActions";

export const showModal = (
  modalType: string,
  modalProps: {}
): ShowModalActionType => ({
  type: SHOW_MODAL,
  modalType,
  modalProps,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
