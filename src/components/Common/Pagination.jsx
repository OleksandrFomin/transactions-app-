import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({
  itemsPerPage,
  totalItemsNum,
  currentPage,
  setCurrentPage,
  pagesPortionNumber,
  setPagesPortionNumber,
}) => {
  const pageNumbers = []; // array of digits
  const numberOfPages = Math.ceil(totalItemsNum / itemsPerPage); //total number of page
  const portionSize = 3; // pages portion visible in paginator
  const numberOfPortions = Math.ceil(numberOfPages / portionSize); // total number of pages portions
  const leftPortionPageNumber = (pagesPortionNumber - 1) * portionSize + 1; // left threshold of portion
  const rightPortionPageNumber = pagesPortionNumber * portionSize; // right threshold of portion

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const onPageChanged = (pageNum) => {
    setCurrentPage(pageNum.toString());
  };

  const onPrevPageClick = () => {
    setPagesPortionNumber((n) => n - 1);
    onPageChanged(rightPortionPageNumber - portionSize);
  };

  const onNextPageClick = () => {
    setPagesPortionNumber((n) => n + 1);
    onPageChanged(leftPortionPageNumber + portionSize);
  };

  const onFirstPageClick = () => {
    setPagesPortionNumber(1);
    setCurrentPage("1");
  };
  const onLastPageClick = () => {
    setPagesPortionNumber(numberOfPortions);
    setCurrentPage(numberOfPages.toString());
  };

  return (
    <div>
      <Pagination>
        {numberOfPages > portionSize && (
          <Pagination.First onClick={onFirstPageClick} />
        )}
        {pagesPortionNumber > 1 && (
          <Pagination.Prev onClick={onPrevPageClick} />
        )}
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

        {pagesPortionNumber < numberOfPortions && (
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
