import React, { useState, useRef, useEffect } from "react";
import Papa from "papaparse";
import { Button } from "react-bootstrap";

const ImportFile = (props) => {
  const [CSVFile, setCSVFile] = useState(null);
  const didMountRef = useRef(false);

  const handleChange = (event) => {
    setCSVFile(event.target.files[0]);
  };

  const updateData = (result) => {
    let data = result.data;
    props.setTransactions(data);
    console.log(data);
  };

  const importCSV = () => {
    Papa.parse(CSVFile, {
      complete: updateData,
      header: true,
    });
  };

  useEffect(() => {
    if (didMountRef.current) {
      importCSV();
    } else didMountRef.current = true;
  }, [CSVFile]);

  return (
    <div>
      <Button variant="success" style={styles.inputBtn}>
        Import{" "}
        <input
          type="file"
          name="file"
          style={styles.fileInput}
          placeholder={null}
          onChange={handleChange}
        />
      </Button>
    </div>
  );
};

const styles = {
  inputBtn: {
    position: "relative",
    overflow: "hidden",
    minWidth: "200px",
  },
  fileInput: {
    position: "absolute",
    top: 0,
    right: 0,
    minWidth: "100%",
    minHeight: "100%",
    fontSize: "100px",
    textAlign: "right",
    filter: "alpha(opacity=0)",
    opacity: 0,
    outline: "none",
    cursor: "inherit",
    display: "block",
  },
};

export default ImportFile;
