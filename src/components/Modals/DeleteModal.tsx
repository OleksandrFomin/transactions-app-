import React from "react";
import { Modal, Button } from "react-bootstrap";

type DeleteModalProps = {
  isActive: boolean;
  id: number;
  confirmAction: (id: number) => void;
  hideModalHandler: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
  isActive,
  id,
  confirmAction,
  hideModalHandler,
}) => {
  return (
    <Modal size="lg" show={isActive} onHide={hideModalHandler}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> Are you sure you want to delete the transaction? </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModalHandler}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => confirmAction(id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
