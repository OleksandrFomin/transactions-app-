import React from "react";
import { useDispatch } from "react-redux";
import { showModal, hideModal } from "../../redux/actions/modalActions";
import {
  changeTransactionStatus,
  deleteTransaction,
} from "../../redux/actions/transactionActions";
import TableButton from "../../components/TransactionsTable/TableButton";

type EditButtonContainerProps = {
  id: number;
  status: string;
};

type DeleteButtonContainerProps = {
  id: number;
};

export const EditButtonContainer: React.FC<EditButtonContainerProps> = ({
  id,
  status,
}) => {
  const dispatch = useDispatch();
  const showEditModal = (id: number, status?: string): void => {
    const updateStatus = (status: string, id: number): void => {
      dispatch(changeTransactionStatus(id, status));
      dispatch(hideModal());
    };

    dispatch(
      showModal("Edit Modal", {
        isActive: true,
        status,
        id,
        confirmAction: updateStatus,
      })
    );
  };

  return (
    <>
      <TableButton
        showModal={showEditModal}
        id={id}
        status={status}
        variant="info"
        btnName="Edit"
      />
    </>
  );
};

export const DeleteButtonContainer: React.FC<DeleteButtonContainerProps> = ({
  id,
}) => {
  const dispatch = useDispatch();

  const deleteTransactionItem = (id: number): void => {
    dispatch(deleteTransaction(id));
    dispatch(hideModal());
  };

  const showDeleteModal = (id: number): void => {
    dispatch(
      showModal("Delete Modal", {
        isActive: true,
        id,
        confirmAction: deleteTransactionItem,
      })
    );
  };

  return (
    <TableButton
      showModal={showDeleteModal}
      id={id}
      variant="danger"
      btnName="Delete"
    />
  );
};
