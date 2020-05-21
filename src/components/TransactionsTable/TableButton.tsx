import React from "react";
import { Button } from "react-bootstrap";

type TableButtonProps = {
  showModal: (id: number, status?: string) => void;
  id: number;
  status?: string;
  variant: "primary" | "secondary" | "success" | "danger" | "info";
  btnName: string;
};

const TableButton: React.FC<TableButtonProps> = ({
  showModal,
  id,
  variant,
  status,
  btnName,
}) => {
  return (
    <>
      <Button variant={variant} onClick={() => showModal(id, status)}>
        {btnName}
      </Button>
    </>
  );
};

export default TableButton;
