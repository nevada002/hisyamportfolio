import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div className="home">
      <Row>
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
            <span>Hisyam Hawari is an UX Designer living in Bandung</span>
            <span>Currently work on project based and building studio</span>
          </p>
        </Col>
      </Row>
    </div>
  );
}
