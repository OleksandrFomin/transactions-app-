import { takeEvery, call, put } from "redux-saga/effects";
import { fetchTransactionsRequest } from "../../api/api";
import { REQUEST_TRANSACTIONS } from "../types/transactionActions";
import {
  toggleIsLoading,
  setTransactions,
} from "../actions/transactionActions";

function* requestTransactionsWorker() {
  try {
    yield put(toggleIsLoading(true));
    const payload = yield call(fetchTransactionsRequest);
    yield put(setTransactions(payload));
    yield put(toggleIsLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* requestTransactionsWatcher() {
  yield takeEvery(REQUEST_TRANSACTIONS, requestTransactionsWorker);
}
