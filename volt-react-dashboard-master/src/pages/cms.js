import React from "react";

import { Col, Row, Button, Dropdown } from "@themesberg/react-bootstrap";

import { GeneralInfoForm } from "../components/Forms";

const ContentPage = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <b>CONTENT MANAGEMENT SYSTEM</b>
      </div>

      <Row style={{ overflowX: 'hidden' }}> {/* Apply overflow-x: hidden to the Row */}
        <Col xs={12} xl={8}>
          <GeneralInfoForm />
        </Col>
      </Row>
    </>
  );
};

export default ContentPage;
