export const REQUEST_TRANSACTIONS = "REQUEST_TRANSACTIONS";
export const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
export const SET_TRANSACTIONS = "SET_TRANSACTIONS";
export const SET_DEFAULT_TRANSACTIONS = "SET_DEFAULT_TRANSACTIONS";
export const CHANGE_TRANSACTION_STATUS = "CHANGE_TRANSACTION_STATUS";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

export const requestTransactions = () => ({
  type: REQUEST_TRANSACTIONS,
});

export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export const setTransactions = (payload) => ({
  type: SET_TRANSACTIONS,
  payload,
});

export const changeTransactionStatus = (id, status) => ({
  type: CHANGE_TRANSACTION_STATUS,
  id,
  status,
});

export const deleteTransaction = (id) => ({
  type: DELETE_TRANSACTION,
  id,
});
