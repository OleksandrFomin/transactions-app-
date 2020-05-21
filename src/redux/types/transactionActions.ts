import { TransactionType } from "../../api/types/types";

export const REQUEST_TRANSACTIONS = "REQUEST_TRANSACTIONS";
export const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
export const SET_TRANSACTIONS = "SET_TRANSACTIONS";
export const SET_DEFAULT_TRANSACTIONS = "SET_DEFAULT_TRANSACTIONS";
export const CHANGE_TRANSACTION_STATUS = "CHANGE_TRANSACTION_STATUS";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_ITEMS_COUNT = "SET_TOTAL_ITEMS_COUNT";
export const SET_PAGES_PORTION_NUMBER = "SET_PAGES_PORTION_NUMBER";

export interface RequestTransactionsAction {
  type: typeof REQUEST_TRANSACTIONS;
}

export interface ToggleIsLoadingAction {
  type: typeof TOGGLE_IS_LOADING;
  isLoading: boolean;
}

export interface SetTransactionsAction {
  type: typeof SET_TRANSACTIONS;
  payload: Array<TransactionType>;
}

export interface ChangeTransactionStatusAction {
  type: typeof CHANGE_TRANSACTION_STATUS;
  id: number;
  status: string;
}

export interface DeleteTransactionAction {
  type: typeof DELETE_TRANSACTION;
  id: number;
}

export interface SetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE;
  pageNum: number;
}
export interface SetTotalItemsCountAction {
  type: typeof SET_TOTAL_ITEMS_COUNT;
  totalItemsCount: number;
}
export interface SetPagesPortionNumberAction {
  type: typeof SET_PAGES_PORTION_NUMBER;
  portionNum: number;
}

export type TransactionActionTypes =
  | RequestTransactionsAction
  | ToggleIsLoadingAction
  | SetTransactionsAction
  | ChangeTransactionStatusAction
  | DeleteTransactionAction
  | SetCurrentPageAction
  | SetTotalItemsCountAction
  | SetPagesPortionNumberAction;
