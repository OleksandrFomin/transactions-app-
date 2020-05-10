import { createSelector } from "reselect";
import memoize from "lodash.memoize";

export const getTransactions = (state) => {
  return state.transactions.transactions;
};

export const getFilteredTransactionsSelector = createSelector(
  (state) => state.transactions.transactions,
  (items) =>
    memoize(({ statusFilterValue, typeFilterValue }) =>
      items
        .filter((item) => {
          if (statusFilterValue === "Show All") {
            return true;
          }
          return item["Status"] === statusFilterValue;
        })
        .filter((item) => {
          if (typeFilterValue === "Show All") {
            return true;
          }
          return item["Type"] === typeFilterValue;
        })
    )
);
