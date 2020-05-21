import React, { useState } from "react";
import { Modal, Button, Dropdown, DropdownButton } from "react-bootstrap";

const EditModal = ({
  status,
  isActive,
  id,
  confirmAction,
  hideModalHandler,
}) => {
  const [newStatus, setNewStatus] = useState(status);

  const onChangeHandler = (e) => setNewStatus(e.target.text);

  return (
    <div>
      <Modal size="md" show={isActive} onHide={hideModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Change transaction status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select transaction status and press Save to confirm </p>
        </Modal.Body>
        <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
          <DropdownButton title={newStatus || status}>
            <Dropdown.Item onClick={onChangeHandler}>Pending</Dropdown.Item>
            <Dropdown.Item onClick={onChangeHandler}>Completed</Dropdown.Item>
            <Dropdown.Item onClick={onChangeHandler}>Cancelled</Dropdown.Item>
          </DropdownButton>
        </div>

        <Modal.Footer>
          <Button variant="secondary" onClick={hideModalHandler}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => confirmAction(newStatus, id)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;
