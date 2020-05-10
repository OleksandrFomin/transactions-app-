import React, { useState, useEffect } from "react";
import { Table, Container, Spinner } from "react-bootstrap/";
import EditModal from "./Modals/EditModal";
import DeleteModal from "./Modals/DeleteModal";
import { connect } from "react-redux";
import {
  requestTransactions,
  changeTransactionStatus,
  deleteTransaction,
  setTransactions,
} from "../redux/actions/actions";
import ImportFile from "./ImportExport/ImportFile";
import ExportFile from "./ImportExport/ExportFile";
import PaginationComponent from "./Common/Pagination";
import DropDownFilter from "./Filters/DropDownFilter";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import {
  getTransactions,
  getFilteredTransactionsSelector,
} from "./utils/selectors";

const TransactionsTable = ({
  setTransactions,
  requestTransactions,
  transactions,
  getFilteredTransactions,
  changeTransactionStatus,
  deleteTransaction,
  isLoading,
}) => {
  // modal controls
  const [isEditModalActive, setIsEditModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);

  // id of item to be deleted/edited
  const [itemEditId, setItemEditId] = useState(null);
  const [itemDeleteId, setItemDeleteId] = useState(null);

  // changes on edit button
  const [currentTransactionStatus, setCurrentTransactionStatus] = useState(
    null
  );

  // transactions after filters applied
  const [filteredTransactions, setFilteredTransactions] = useState(
    transactions
  );

  // data for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesPortionNumber, setPagesPortionNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // options available in dropdown filters
  const statusFilterOptions = ["Show All", "Pending", "Completed", "Cancelled"];
  const typeFilterOptions = ["Show All", "Refill", "Withdrawal"];

  // current filter values
  const [statusFilterValue, setStatusFilterValue] = useState(
    statusFilterOptions[0]
  );
  const [typeFilterValue, setTypeFilterValue] = useState(typeFilterOptions[0]);

  // initial API call on page load
  useEffect(() => {
    requestTransactions();
  }, []);

  // filter func gets called each time filter value changes
  useEffect(() => {
    const filterValues = {
      statusFilterValue,
      typeFilterValue,
    };

    setFilteredTransactions(getFilteredTransactions(filterValues));
  }, [transactions, statusFilterValue, typeFilterValue]);

  useEffect(() => {
    if (!currentTransactions.length && currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  }, [currentTransactions]);

  const editTransactionStatus = (id, status) => {
    changeTransactionStatus(id, status);
    setIsEditModalActive(false);
  };

  const toggleEditModal = (id, status) => {
    setItemEditId(id);
    setCurrentTransactionStatus(status);
    setIsEditModalActive(!isEditModalActive);
  };

  const deleteTransactionItem = (id) => {
    deleteTransaction(id);
    setIsDeleteModalActive(!isDeleteModalActive);
  };

  const toggleDeleteModal = (id) => {
    setItemDeleteId(id);
    setIsDeleteModalActive(!isDeleteModalActive);
  };

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      <Container>
        <div style={styles.btnRowContainer}>
          <div style={styles.filterBtnContainer}>
            <div style={styles.filterBtnItem}>
              <div style={styles.filterBtnItemText}>Filter by Status:</div>
              <DropDownFilter
                transactions={transactions}
                setTransactions={setTransactions}
                filterValue={statusFilterValue}
                filterOptions={statusFilterOptions}
                setFilterValue={setStatusFilterValue}
                setCurrentPage={setCurrentPage}
                setPagesPortionNumber={setPagesPortionNumber}
              />
            </div>
            <div style={styles.filterBtnItem}>
              <div style={styles.filterBtnItemText}>Filter by Type:</div>
              <DropDownFilter
                transactions={transactions}
                setTransactions={setTransactions}
                filterValue={typeFilterValue}
                filterOptions={typeFilterOptions}
                setFilterValue={setTypeFilterValue}
                setCurrentPage={setCurrentPage}
                setPagesPortionNumber={setPagesPortionNumber}
              />
            </div>
          </div>

          <div style={styles.importExportBtnContainer}>
            <div style={styles.importExportBtnItem}>
              <ImportFile
                setTransactions={setTransactions}
                statusFilterOptions={statusFilterOptions}
                typeFilterOptions={typeFilterOptions}
                setStatusFilterValue={setStatusFilterValue}
                setTypeFilterValue={setTypeFilterValue}
              />
            </div>
            <div style={styles.importExportBtnItem}>
              <ExportFile currentTransactions={currentTransactions} />
            </div>
          </div>
        </div>
        {isLoading ? (
          // preloader
          <div style={styles.preloaderContainer}>
            <Spinner animation="grow" />
          </div>
        ) : (
          <div>
            <Table striped bordered hover size="sm">
              <TableHeader />
              {!currentTransactions.length ? (
                <tr>
                  <td colspan="6" style={styles.noItemsText}>
                    No content to be displayed
                  </td>
                </tr>
              ) : (
                <TableContent
                  currentTransactions={currentTransactions}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  toggleEditModal={toggleEditModal}
                  toggleDeleteModal={toggleDeleteModal}
                />
              )}
            </Table>
            <div style={styles.paginationContainer}>
              <PaginationComponent
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItemsNum={filteredTransactions.length}
                paginate={paginate}
                pagesPortionNumber={pagesPortionNumber}
                setPagesPortionNumber={setPagesPortionNumber}
              />
            </div>
          </div>
        )}

        {/* Modal appears on edit click */}
        <EditModal
          isEditModalActive={isEditModalActive}
          setIsEditModalActive={setIsEditModalActive}
          itemEditId={itemEditId}
          currentTransactionStatus={currentTransactionStatus}
          changeTransactionStatus={changeTransactionStatus}
          editTransactionStatus={editTransactionStatus}
        />
        {/* Modal appears on delete click */}
        <DeleteModal
          isDeleteModalActive={isDeleteModalActive}
          setIsDeleteModalActive={setIsDeleteModalActive}
          itemDeleteId={itemDeleteId}
          deleteTransactionItem={deleteTransactionItem}
        />
      </Container>
    </>
  );
};

const styles = {
  btnRowContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px",
    marginBottom: "40px",
  },

  filterBtnContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  filterBtnItem: {
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
  },

  filterBtnItemText: {
    marginRight: "10px",
  },

  importExportBtnContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  importExportBtnItem: {
    marginRight: "20px",
  },

  noItemsText: {
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: "24px",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  preloaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
};

const mapStateToProps = (state) => ({
  transactions: getTransactions(state),
  getFilteredTransactions: getFilteredTransactionsSelector(state),
  isLoading: state.transactions.isLoading,
});

export default connect(mapStateToProps, {
  requestTransactions,
  changeTransactionStatus,
  deleteTransaction,
  setTransactions,
})(TransactionsTable);
