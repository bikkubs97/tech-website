import React from "react";
import { Col, Row } from '@themesberg/react-bootstrap';

export default function Messages({ firstName, lastName, email, phone, subject, message }) {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <b>MESSAGE DETAILS</b> 
      </div>

      <Row>
        <Col xs={12} xl={8}>
          <div className="mb-4">
            <h5 className="mb-4">Contact Information</h5>
            <p><strong>Name:</strong> {firstName} {lastName}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
          </div>

          <div className="mb-4">
            <h5 className="mb-4">Message Subject</h5>
            <p>{subject}</p>
          </div>

          <div className="mb-4">
            <h5 className="mb-4">Message</h5>
            <p>{message}</p>
          </div>
        </Col>
      </Row>
    </>
  );
}
