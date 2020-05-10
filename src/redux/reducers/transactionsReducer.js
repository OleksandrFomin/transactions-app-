import {
  SET_TRANSACTIONS,
  CHANGE_TRANSACTION_STATUS,
  DELETE_TRANSACTION,
  TOGGLE_IS_LOADING,
} from "../actions/actions";
import {
  updateObjectInArray,
  deleteObjectFromArray,
} from "../../components/utils/helpers";

let initialState = {
  transactions: [],
  isLoading: false,
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };

    case CHANGE_TRANSACTION_STATUS:
      return {
        ...state,
        transactions: updateObjectInArray(
          state.transactions,
          action.id,
          "TransactionId",
          {
            Status: action.status,
          }
        ),
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: deleteObjectFromArray(
          state.transactions,
          action.id,
          "TransactionId"
        ),
      };

    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};

export default transactionsReducer;
