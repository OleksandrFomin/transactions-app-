import React, { useState, useRef, useEffect } from "react";
import Papa from "papaparse";
import { Button } from "react-bootstrap";

type ImportFileProps = {
  updateDataFromCSV: (data: any) => void;
};

const ImportFile: React.FC<ImportFileProps> = ({ updateDataFromCSV }) => {
  const [CSVFile, setCSVFile] = useState<any>(null);
  const didMountRef = useRef(false);

  const handleChange = (event: any): void => {
    setCSVFile(event.target.files[0]);
  };

  useEffect(() => {
    if (didMountRef.current && CSVFile) {
      importCSV();
    } else didMountRef.current = true;
  }, [CSVFile]);

  const importCSV = () => {
    Papa.parse(CSVFile, {
      complete: updateDataFromCSV,
      header: true,
    });
  };

  return (
    <>
      <Button
        variant="success"
        style={{ position: "relative", overflow: "hidden", minWidth: "200px" }}
      >
        Import
        <input
          type="file"
          name="file"
          style={{
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
          }}
          placeholder={""}
          onChange={handleChange}
        />
      </Button>
    </>
  );
};

export default ImportFile;
