export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export interface ShowModalActionType {
  type: typeof SHOW_MODAL;
  modalType: string;
  modalProps: {};
}
export interface HideModalActionType {
  type: typeof HIDE_MODAL;
}

export type ModalActionTypes = ShowModalActionType | HideModalActionType;
