import {
  SHOW_MODAL,
  ModalActionTypes,
  HIDE_MODAL,
} from "../types/modalActions";

export interface ModalState {
  modalType: string | null;
  modalProps: {};
}

let initialState: ModalState = {
  modalType: null,
  modalProps: {},
};

const modalReducer = (
  state = initialState,
  action: ModalActionTypes
): ModalState => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps,
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default modalReducer;
