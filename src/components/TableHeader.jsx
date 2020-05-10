import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr style={{ textAlign: "center" }}>
        <th>ID</th>
        <th>Status</th>
        <th>Type</th>
        <th>Client name</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
