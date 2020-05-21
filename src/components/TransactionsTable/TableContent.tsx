import React from "react";
import { TransactionType } from "../../api/types/types";
import {
  EditButtonContainer,
  DeleteButtonContainer,
} from "../../containers/TransactionsTable/TableButtonContainer";

interface TableContentProps {
  transactions: Array<TransactionType>;
}

const TableContent: React.FC<TableContentProps> = (props) => {
  return (
    <>
      <tbody>
        {props.transactions.map((item) => {
          return (
            <tr key={item.TransactionId}>
              <td>{item.TransactionId}</td>
              <td>{item.Status}</td>
              <td>{item.Type}</td>
              <td>{item.ClientName}</td>
              <td>{item.Amount}</td>
              <td>
                <div style={styles.tableBtnContainer}>
                  <EditButtonContainer
                    id={item.TransactionId}
                    status={item.Status}
                  />
                  <DeleteButtonContainer id={item.TransactionId} />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

const styles = {
  tableBtnContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  tableBtnItem: {
    marginRight: "30px",
  },

  noItems: {
    textAlign: "center",
  },
};

export default TableContent;
