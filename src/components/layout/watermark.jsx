import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Watermark() {
  return (
    <>
      <Row>
        <Col
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p className="text-muted" style={{ fontSize: "small" }}>
            Created by
            <a
              className="text-muted"
              href="https://github.com/nevada002"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", marginLeft: "3px" }}
            >
              NGL
            </a>
          </p>
        </Col>
      </Row>
    </>
  );
}
