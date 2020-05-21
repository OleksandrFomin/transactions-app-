import React from "react";
import { useSelector } from "react-redux";
import {
  selectFilteredTransactions,
  selectStatusFilterValue,
  selectTypeFilterValue,
} from "../../selectors/selectors";
import ExportFile from "../../components/ImportExport/ExportFile";
import { RootState } from "../../redux/store";
import { TransactionType } from "../../api/types/types";

const ExportContainer: React.FC = () => {
  const statusFilterValue = useSelector(selectStatusFilterValue);
  const typeFilterValue = useSelector(selectTypeFilterValue);

  const transactions = useSelector(
    (state: RootState): Array<TransactionType> =>
      selectFilteredTransactions(state, statusFilterValue, typeFilterValue)
  );

  return (
    <>
      <ExportFile transactions={transactions} />
    </>
  );
};

export default ExportContainer;
