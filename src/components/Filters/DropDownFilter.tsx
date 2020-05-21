import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  setCurrentPage,
  setPagesPortionNumber,
} from "../../redux/actions/transactionActions";

type DropdownFilterProps = {
  filterOptions: Array<string>;
  stateSelector: (state: RootState) => string;
  onChangeAction: (filterValue: string) => void;
};

const DropDownFilter: React.FC<DropdownFilterProps> = ({
  filterOptions,
  stateSelector,
  onChangeAction,
}) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(stateSelector);

  const onFilterChange = (filterValue: string): void => {
    dispatch(onChangeAction(filterValue));
    dispatch(setCurrentPage(1));
    dispatch(setPagesPortionNumber(1));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown">{filterValue}</Dropdown.Toggle>
      <Dropdown.Menu>
        {filterOptions.map((option, i) => (
          <Dropdown.Item onClick={() => onFilterChange(option)} key={i}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownFilter;
