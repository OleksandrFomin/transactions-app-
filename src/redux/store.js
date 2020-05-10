import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import transactionsReducer from "./reducers/transactionsReducer";
import { requestTransactionsWatcher } from "./sagas/transactionsSaga";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

let rootReducer = combineReducers({
  transactions: transactionsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(requestTransactionsWatcher);

export default store;
