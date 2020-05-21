import {
  SetTypeFilterActionType,
  SET_TYPE_FILTER,
  SetStatusFilterActionType,
  SET_STATUS_FILTER,
} from "../types/filterActions";

export const setTypeFilterValue = (
  payload: string
): SetTypeFilterActionType => ({
  type: SET_TYPE_FILTER,
  payload,
});

export const setStatusFilterValue = (
  payload: string
): SetStatusFilterActionType => ({
  type: SET_STATUS_FILTER,
  payload,
});
