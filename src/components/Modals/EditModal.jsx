import React, { useState } from "react";
import { Modal, Button, Dropdown, DropdownButton } from "react-bootstrap";

const EditModal = (props) => {
  const [transactionStatus, setTransactionStatus] = useState(
    props.currentTransactionStatus
  );

  const onClickHandler = (e) => {
    setTransactionStatus(e.target.text);
  };

  const onSaveHandler = () => {
    props.editTransactionStatus(props.itemEditId, transactionStatus);
  };

  const onCancelHandler = () => {
    props.setIsEditModalActive(false);
  };

  return (
    <div>
      <Modal
        size="md"
        show={props.isEditModalActive}
        onHide={() => props.setIsEditModalActive(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change transaction status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select transaction status and press Save to confirm </p>
        </Modal.Body>
        <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
          <DropdownButton
            title={transactionStatus || props.currentTransactionStatus}
          >
            <Dropdown.Item onClick={onClickHandler}>Pending</Dropdown.Item>
            <Dropdown.Item onClick={onClickHandler}>Completed</Dropdown.Item>
            <Dropdown.Item onClick={onClickHandler}>Cancelled</Dropdown.Item>
          </DropdownButton>
        </div>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancelHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={onSaveHandler}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;
