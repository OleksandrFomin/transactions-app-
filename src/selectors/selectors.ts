import { ModalState } from "./../redux/reducers/modalReducer";
import { RootState } from "../redux/store";
import { TransactionType } from "../api/types/types";
import { createSelector } from "reselect";

export const selectTransactions = (state: RootState): Array<TransactionType> =>
  Object.values(state.transactions.transactions);

export const selectIsLoading = (state: RootState): boolean =>
  state.transactions.isLoading;

export const selectTypeFilterValue = (state: RootState): string =>
  state.filter.typeFilter;

export const selectStatusFilterValue = (state: RootState): string =>
  state.filter.statusFilter;

export const selectFilteredTransactions = createSelector(
  selectTransactions,
  (a: any, filterValueFirst: string) => filterValueFirst,
  (a: any, b: any, filterValueSecond: string) => filterValueSecond,
  (items, filterValueFirst, filterValueSecond) =>
    items
      .filter((item) => {
        if (filterValueFirst === "Show All") {
          return true;
        }
        return item["Status"] === filterValueFirst;
      })
      .filter((item) => {
        if (filterValueSecond === "Show All") {
          return true;
        }
        return item["Type"] === filterValueSecond;
      })
);

export const selectCurrentPage = (state: RootState): number =>
  state.transactions.currentPage;

export const selectItemsPerPage = (state: RootState): number =>
  state.transactions.itemsPerPage;

export const selectTotalItemsCount = (state: RootState): number =>
  state.transactions.totalItemsCount;

export const selectPagesPortionNum = (state: RootState): number =>
  state.transactions.pagesPortionNum;

export const selectModal = (state: RootState): ModalState => state.modal;
