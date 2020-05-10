import React from "react";
import { Dropdown } from "react-bootstrap";

const DropDownFilter = (props) => {
  const onClickHandler = (e) => {
    if (e.target.text !== props.filterValue) {
      props.setTransactions(props.transactions);
      props.setFilterValue(e.target.text);
      props.setCurrentPage(1);
      props.setPagesPortionNumber(1);
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle>{props.filterValue}</Dropdown.Toggle>
      <Dropdown.Menu>
        {props.filterOptions.map((option, i) => (
          <Dropdown.Item onClick={onClickHandler} key={i}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownFilter;
