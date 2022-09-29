import React from "react";
import { Col, Row } from "react-bootstrap";
import Dribbble from "../card/card";
import showcase from "../../data/showcase.json";

export default function Project() {
  return (
    <>
      <Row style={{ marginTop: "100px" }}>
        {showcase.map((item, id) => (
          <Col key={id} lg={6} md={12} sm={12} xs={12}>
            <Dribbble link={item.link} image={item.image} title={item.title} />
          </Col>
        ))}
      </Row>
    </>
  );
}
