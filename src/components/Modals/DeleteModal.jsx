import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({
  isDeleteModalActive,
  setIsDeleteModalActive,
  itemDeleteId,
  deleteTransaction,
  dispatch,
}) => {
  const onCancelHandler = () => {
    setIsDeleteModalActive(false);
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteTransaction(id));
    setIsDeleteModalActive(!isDeleteModalActive);
  };

  return (
    <Modal
      size="md"
      show={isDeleteModalActive}
      onHide={() => setIsDeleteModalActive(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> Are you sure you want to delete the transaction? </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancelHandler}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => onDeleteHandler(itemDeleteId)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
