import {
  FilterActionTypes,
  SET_TYPE_FILTER,
  SET_STATUS_FILTER,
} from "../types/filterActions";

interface FilterState {
  statusFilter: string;
  typeFilter: string;
}

let initialState: FilterState = {
  statusFilter: "Show All",
  typeFilter: "Show All",
};

const filterReducer = (
  state = initialState,
  action: FilterActionTypes
): FilterState => {
  switch (action.type) {
    case SET_STATUS_FILTER:
      return {
        ...state,
        statusFilter: action.payload,
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        typeFilter: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
