import React from "react";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";

const ExportFile = ({ transactions }) => {
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
    minWidth: "200px",
  },
  inputBtnText: { width: "100%", color: "#fff", textDecoration: "none" },
};

export default ExportFile;
