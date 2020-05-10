import { takeEvery, call, put } from "redux-saga/effects";
import { fetchTransactionsRequest } from "../../api/api";
import {
  REQUEST_TRANSACTIONS,
  setTransactions,
  toggleIsLoading,
} from "../actions/actions";

function* requestTransactionsWorker() {
  yield put(toggleIsLoading(true));
  const payload = yield call(fetchTransactionsRequest);
  yield put(setTransactions(payload));
  yield put(toggleIsLoading(false));
}

export function* requestTransactionsWatcher() {
  yield takeEvery(REQUEST_TRANSACTIONS, requestTransactionsWorker);
}
