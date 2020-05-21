import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TransactionTableContainer from "./containers/TransactionsTable/TransactionTableContainer";
import { Container, Row, Col } from "react-bootstrap";
import ImportContainer from "./containers/ImportExport/ImportContainer";
import ExportContainer from "./containers/ImportExport/ExportContainer";
import {
  TypeFilterContainer,
  StatusFilterContainer,
} from "./containers/Filters/FilterContainer";
import ModalContainer from "./containers/Modals/ModalContainer";
import PaginationContainer from "./containers/Pagination/PaginationContainer";

const App: React.FC = () => {
  return (
    <>
      <Container>
        {/* ----1ST ROW---- */}
        <Row style={{ marginTop: "20px" }}>
          <Col lg={2} style={{ textAlign: "right" }}>
            Sort by Type:
          </Col>
          <Col lg={2}>Sort by Status:</Col>
        </Row>

        {/* ----2ND ROW---- */}
        <Row style={{ marginTop: "5px", marginBottom: "30px" }}>
          <Col lg={2} style={{ textAlign: "right" }}>
            <TypeFilterContainer />
          </Col>
          <Col lg={2}>
            <StatusFilterContainer />
          </Col>
          <Col lg={{ offset: 2, span: 3 }} style={{ textAlign: "right" }}>
            <ExportContainer />
          </Col>
          <Col lg={3}>
            <ImportContainer />
          </Col>
        </Row>

        {/* TABLE ROW */}
        <Row>
          <TransactionTableContainer />
        </Row>

        {/* PAGINATION ROW */}
        <Row style={{ justifyContent: "center" }}>
          <PaginationContainer />
        </Row>

        {/* MODAL WINDOWS CONTAINER (HIDDEN BY DEFAULT) */}
        <Row>
          <ModalContainer />
        </Row>
      </Container>
    </>
  );
};

export default App;
