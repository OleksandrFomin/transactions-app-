export const SET_STATUS_FILTER = "SET_STATUS_FILTER";
export const SET_TYPE_FILTER = "SET_TYPE_FILTER";

export interface SetStatusFilterActionType {
  type: typeof SET_STATUS_FILTER;
  payload: string;
}
export interface SetTypeFilterActionType {
  type: typeof SET_TYPE_FILTER;
  payload: string;
}

export type FilterActionTypes =
  | SetStatusFilterActionType
  | SetTypeFilterActionType;
