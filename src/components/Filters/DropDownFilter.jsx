import React from "react";
import { Dropdown } from "react-bootstrap";

const DropDownFilter = ({
  transactions,
  setTransactions,
  filterValue,
  setFilterValue,
  filterOptions,
  setCurrentPage,
  setPagesPortionNumber,
  dispatch,
}) => {
  const onClickHandler = (e) => {
    if (e.target.text !== filterValue) {
      dispatch(setTransactions(transactions));
      setFilterValue(e.target.text);
      setCurrentPage(1);
      setPagesPortionNumber(1);
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle>{filterValue}</Dropdown.Toggle>
      <Dropdown.Menu>
        {filterOptions.map((option, i) => (
          <Dropdown.Item onClick={onClickHandler} key={i}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownFilter;
