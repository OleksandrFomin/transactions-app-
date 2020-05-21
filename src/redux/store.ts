import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import transactionsReducer from "./reducers/transactionsReducer";
import { requestTransactionsWatcher } from "./sagas/transactionsSaga";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import filterReducer from "./reducers/filterReducer";
import modalReducer from "./reducers/modalReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  transactions: transactionsReducer,
  filter: filterReducer,
  modal: modalReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(requestTransactionsWatcher);

export default store;
