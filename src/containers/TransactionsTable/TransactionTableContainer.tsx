import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  requestTransactions,
  setTotalItemsCount,
} from "../../redux/actions/transactionActions";
import {
  selectFilteredTransactions,
  selectStatusFilterValue,
  selectTypeFilterValue,
  selectIsLoading,
  selectCurrentPage,
  selectItemsPerPage,
} from "../../selectors/selectors";
import { RootState } from "../../redux/store";
import TransactionsTable from "../../components/TransactionsTable/TransactionsTable";
import { TransactionType } from "../../api/types/types";

const TransactionTableContainer: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestTransactions());
  }, []);

  const isLoading = useSelector(selectIsLoading);

  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const statusFilterValue = useSelector(selectStatusFilterValue);
  const typeFilterValue = useSelector(selectTypeFilterValue);

  const transactions = useSelector(
    (state: RootState): Array<TransactionType> =>
      selectFilteredTransactions(state, statusFilterValue, typeFilterValue)
  );

  useEffect(() => {
    dispatch(setTotalItemsCount(transactions.length));
  }, [transactions.length]);

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;

  // transactions shown on the current page
  const currentTransactions = transactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <TransactionsTable
        transactions={currentTransactions}
        isLoading={isLoading}
      />
    </>
  );
};

export default TransactionTableContainer;
