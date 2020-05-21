import {
  TransactionActionTypes,
  SET_TRANSACTIONS,
  CHANGE_TRANSACTION_STATUS,
  DELETE_TRANSACTION,
  TOGGLE_IS_LOADING,
  SET_CURRENT_PAGE,
  SET_TOTAL_ITEMS_COUNT,
  SET_PAGES_PORTION_NUMBER,
} from "../types/transactionActions";
import { normalizeTransactions } from "../utils/normalizeResponse";
import { omit } from "lodash";

interface TransactionsState {
  transactions: any;
  currentPage: number;
  itemsPerPage: number;
  totalItemsCount: number;
  pagesPortionNum: number;
  isLoading: boolean;
}

let initialState: TransactionsState = {
  transactions: {} as any,
  currentPage: 1,
  itemsPerPage: 5,
  totalItemsCount: 0,
  pagesPortionNum: 1,
  isLoading: false,
};

const transactionsReducer = (
  state = initialState,
  action: TransactionActionTypes
): TransactionsState => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: normalizeTransactions(action.payload),
      };
    case CHANGE_TRANSACTION_STATUS:
      return {
        ...state,
        transactions: {
          ...state.transactions,
          [action.id]: {
            ...state.transactions[action.id],
            Status: action.status,
          },
        },
      };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: omit(state.transactions, action.id),
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNum,
      };

    case SET_TOTAL_ITEMS_COUNT:
      return {
        ...state,
        totalItemsCount: action.totalItemsCount,
      };
    case SET_PAGES_PORTION_NUMBER:
      return {
        ...state,
        pagesPortionNum: action.portionNum,
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
