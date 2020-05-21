import {
  REQUEST_TRANSACTIONS,
  TOGGLE_IS_LOADING,
  SET_TRANSACTIONS,
  CHANGE_TRANSACTION_STATUS,
  DELETE_TRANSACTION,
  RequestTransactionsAction,
  ToggleIsLoadingAction,
  SetTransactionsAction,
  ChangeTransactionStatusAction,
  DeleteTransactionAction,
  SetCurrentPageAction,
  SET_CURRENT_PAGE,
  SetTotalItemsCountAction,
  SET_TOTAL_ITEMS_COUNT,
  SetPagesPortionNumberAction,
  SET_PAGES_PORTION_NUMBER,
} from "../types/transactionActions";
import { TransactionType } from "../../api/types/types";

export const requestTransactions = (): RequestTransactionsAction => ({
  type: REQUEST_TRANSACTIONS,
});

export const toggleIsLoading = (isLoading: boolean): ToggleIsLoadingAction => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export const setTransactions = (
  payload: Array<TransactionType>
): SetTransactionsAction => ({
  type: SET_TRANSACTIONS,
  payload,
});

export const changeTransactionStatus = (
  id: number,
  status: string
): ChangeTransactionStatusAction => ({
  type: CHANGE_TRANSACTION_STATUS,
  id,
  status,
});

export const deleteTransaction = (id: number): DeleteTransactionAction => ({
  type: DELETE_TRANSACTION,
  id,
});

export const setCurrentPage = (pageNum: number): SetCurrentPageAction => ({
  type: SET_CURRENT_PAGE,
  pageNum,
});
export const setPagesPortionNumber = (
  portionNum: number
): SetPagesPortionNumberAction => ({
  type: SET_PAGES_PORTION_NUMBER,
  portionNum,
});

export const setTotalItemsCount = (
  totalItemsCount: number
): SetTotalItemsCountAction => ({
  type: SET_TOTAL_ITEMS_COUNT,
  totalItemsCount,
});
