import React from "react";
import { Col, Row } from "react-bootstrap";

export default function CenterFooter() {
  return (
    <>
      <Row style={{ marginTop: "50px" }}>
        <Col
          xs={12}
          style={{
            display: "grid",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1>Let’s Connect</h1>
          <p>For Work inquiry or just say hello</p>
          <p>hawari.hisyam@gmail.com</p>
        </Col>
      </Row>
    </>
  );
}
