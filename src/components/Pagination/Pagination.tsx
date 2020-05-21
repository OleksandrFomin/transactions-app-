import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

type PaginationComponentProps = {
  totalItemsCount: number;
  currentPage: number;
  setCurrentPageHandler: (pageNum: number) => void;
  pagesPortionNum: number;
  setPagesPortionNumHandler: (portionNum: number) => void;
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalItemsCount,
  currentPage,
  setCurrentPageHandler,
  pagesPortionNum,
  setPagesPortionNumHandler,
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const pageNumbers = []; // array of digits
  const numberOfPages = Math.ceil(totalItemsCount / itemsPerPage); //total number of page
  const portionSize = 3; // pages portion visible in paginator
  const numberOfPortions = Math.ceil(numberOfPages / portionSize); // total number of pages portions
  const leftPortionPageNumber = (pagesPortionNum - 1) * portionSize + 1; // left threshold of portion
  const rightPortionPageNumber = pagesPortionNum * portionSize; // right threshold of portion

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const onPageChanged = (pageNum: number): void => {
    setCurrentPageHandler(pageNum);
  };

  const onPrevPageClick = () => {
    setPagesPortionNumHandler(pagesPortionNum - 1);
    onPageChanged(rightPortionPageNumber - portionSize);
  };

  const onNextPageClick = () => {
    setPagesPortionNumHandler(pagesPortionNum + 1);
    onPageChanged(leftPortionPageNumber + portionSize);
  };

  const onFirstPageClick = () => {
    setPagesPortionNumHandler(1);
    setCurrentPageHandler(1);
  };
  const onLastPageClick = () => {
    setPagesPortionNumHandler(numberOfPortions);
    setCurrentPageHandler(numberOfPages);
  };

  return (
    <div>
      <Pagination>
        {numberOfPages > portionSize && (
          <Pagination.First onClick={onFirstPageClick} />
        )}
        {pagesPortionNum > 1 && <Pagination.Prev onClick={onPrevPageClick} />}
        {pageNumbers
          .filter(
            (page) =>
              page >= leftPortionPageNumber && page <= rightPortionPageNumber
          )
          .map((number) => {
            return (
              <Pagination.Item
                onClick={() => onPageChanged(number)}
                active={number == currentPage}
              >
                {number}
              </Pagination.Item>
            );
          })}

        {pagesPortionNum < numberOfPortions && (
          <Pagination.Next onClick={onNextPageClick} />
        )}
        {numberOfPages > portionSize && (
          <Pagination.Last onClick={onLastPageClick} />
        )}
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
