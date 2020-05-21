import React from "react";
import { useDispatch } from "react-redux";

import ImportFile from "../../components/ImportExport/ImportFile";
import { setTransactions } from "../../redux/actions/transactionActions";
import {
  setTypeFilterValue,
  setStatusFilterValue,
} from "../../redux/actions/filterActions";

const ImportContainer: React.FC = () => {
  const dispatch = useDispatch();

  const updateDataFromCSV = (result: any): void => {
    let data = result.data;
    setStatusFilterValue("Show All");
    setTypeFilterValue("Show All");
    dispatch(setTransactions(data));
  };

  return (
    <>
      <ImportFile updateDataFromCSV={updateDataFromCSV} />
    </>
  );
};

export default ImportContainer;
