import React from "react";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";
import { TransactionType } from "../../api/types/types";

type ExportFileProps = {
  transactions: Array<TransactionType>;
};

const ExportFile: React.FC<ExportFileProps> = ({ transactions }) => {
  return (
    <div>
      <Button variant="success" style={styles.inputBtn}>
        <CSVLink
          data={transactions}
          filename={"transactions.csv"}
          target="_blank"
          style={styles.inputBtnText}
        >
          Export
        </CSVLink>
      </Button>
    </div>
  );
};

const styles = {
  inputBtn: {
    width: "200px",
  },
  inputBtnText: {
    display: "inline-block",
    width: "100%",
    color: "#fff",
    textDecoration: "none",
  },
};

export default ExportFile;
