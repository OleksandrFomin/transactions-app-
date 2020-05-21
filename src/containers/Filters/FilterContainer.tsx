import React from "react";
import { selectTypeFilterValue } from "../../selectors/selectors";
import { setTypeFilterValue } from "../../redux/actions/filterActions";
import DropDownFilter from "../../components/Filters/DropDownFilter";
import { selectStatusFilterValue } from "../../selectors/selectors";
import { setStatusFilterValue } from "../../redux/actions/filterActions";

export const TypeFilterContainer: React.FC = () => (
  <>
    <DropDownFilter
      stateSelector={selectTypeFilterValue}
      onChangeAction={setTypeFilterValue}
      filterOptions={["Show All", "Refill", "Withdrawal"]}
    />
  </>
);

export const StatusFilterContainer: React.FC = () => (
  <>
    <DropDownFilter
      stateSelector={selectStatusFilterValue}
      onChangeAction={setStatusFilterValue}
      filterOptions={["Show All", "Pending", "Completed", "Cancelled"]}
    />
  </>
);
