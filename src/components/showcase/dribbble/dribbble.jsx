import React from "react";
import { Col, Row } from "react-bootstrap";
import Dribbble from "../card/card";
import showcase from "../../data/showcase.json";

export default function Project() {
  return (
    <>
      <Row style={{ marginTop: "100px" }}>
        {showcase.map((item, id) => (
          <Col key={id} md={6} sm={6} xs={12}>
            <Dribbble image={item.image} title={item.title} />
          </Col>
        ))}
      </Row>
    </>
  );
}
