import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Introduction() {
  return (
    <Row style={{ marginBottom: "100px", marginTop: "100px" }}>
      <Col xs={4}>
        <p>Hello, Welcome to my portfolio</p>
        <h3 className="mb-3">Hisyam Hawari</h3>
        <p>- UX Designer</p>
        <p>- UX Researcher</p>
      </Col>
      <Col
        xs={8}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <p style={{ display: "grid" }}>
          <span style={{ textAlign: "right" }}>
            Hisyam Hawari is an UX Designer living in Bandung
          </span>
          <span style={{ textAlign: "right" }}>
            Currently work on project based and building studio
          </span>
        </p>
      </Col>
    </Row>
  );
}
