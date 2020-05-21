import React from "react";
import { Table, Spinner } from "react-bootstrap/";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import { TransactionType } from "../../api/types/types";

type TransactionsTableProps = {
  transactions: Array<TransactionType>;
  isLoading: boolean;
};

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <div style={{ margin: "0 auto", marginTop: "160px" }}>
          <Spinner animation="grow" />
        </div>
      ) : (
        <Table striped bordered hover size="sm">
          <TableHeader />
          {!transactions.length ? (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "20px", padding: "20px 0" }}>
                  No content to be displayed
                </div>
              </td>
            </tr>
          ) : (
            <TableContent transactions={transactions} />
          )}
        </Table>
      )}
    </>
  );
};

// const styles = {
//   btnRowContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "40px",
//     marginBottom: "40px",
//   },

//   filterBtnContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//   },

//   filterBtnItem: {
//     display: "flex",
//     alignItems: "center",
//     marginRight: "20px",
//   },

//   filterBtnItemText: {
//     marginRight: "10px",
//   },

//   importExportBtnContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//   },

//   importExportBtnItem: {
//     marginRight: "20px",
//   },

//   noItemsText: {
//     textAlign: "center",
//     verticalAlign: "middle",
//     fontSize: "24px",
//   },
//   paginationContainer: {
//     display: "flex",
//     justifyContent: "center",
//   },
//   preloaderContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "50vh",
//   },
// };

export default TransactionsTable;
