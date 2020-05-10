import React from "react";
import { Button } from "react-bootstrap";

const TableContent = ({
  currentTransactions,
  toggleEditModal,
  toggleDeleteModal,
}) => {
  return (
    <tbody>
      {currentTransactions.map(
        ({ TransactionId, Status, Type, ClientName, Amount }) => {
          return (
            <tr key={TransactionId}>
              <td>{TransactionId}</td>
              <td>{Status}</td>
              <td>{Type}</td>
              <td>{ClientName}</td>
              <td>{Amount}</td>
              <td>
                <div style={styles.tableBtnContainer}>
                  <Button
                    variant="info"
                    style={styles.tableBtnItem}
                    onClick={() => toggleEditModal(TransactionId, Status)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => toggleDeleteModal(TransactionId)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

const styles = {
  tableBtnContainer: {
    display: "flex",
    justifyContent: "center",
  },
  tableBtnItem: {
    marginRight: "30px",
  },
};

export default TableContent;
