import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalItemsCount,
  selectCurrentPage,
  selectPagesPortionNum,
  selectItemsPerPage,
} from "../../selectors/selectors";
import PaginationComponent from "../../components/Pagination/Pagination";
import {
  setCurrentPage,
  setPagesPortionNumber,
} from "../../redux/actions/transactionActions";

const PaginationContainer: React.FC = () => {
  const dispatch = useDispatch();

  const totalItemsCount = useSelector(selectTotalItemsCount);
  const currentPage = useSelector(selectCurrentPage);
  const pagesPortionNum = useSelector(selectPagesPortionNum);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const setCurrentPageHandler = (pageNum: number): void => {
    dispatch(setCurrentPage(pageNum));
  };

  const setPagesPortionNumHandler = (portionNum: number): void => {
    dispatch(setPagesPortionNumber(portionNum));
  };

  return (
    <>
      <PaginationComponent
        totalItemsCount={totalItemsCount}
        currentPage={currentPage}
        setCurrentPageHandler={setCurrentPageHandler}
        pagesPortionNum={pagesPortionNum}
        setPagesPortionNumHandler={setPagesPortionNumHandler}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default PaginationContainer;
