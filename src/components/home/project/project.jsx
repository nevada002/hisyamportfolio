import React from "react";
import { Col, Row } from "react-bootstrap";
import Content from "../card/card";
import home from "../../data/home.json";

export default function Project() {
  return (
    <>
      <Row>
        <Col xs={4}>
          <p style={{ marginTop: "30px", marginBottom: "30px" }}>
            - Featured Project
          </p>
        </Col>
      </Row>
      <Row>
        {home.slice(0, 4).map((item, id) => (
          <Col key={id} lg={6} md={12} sm={12} xs={12}>
            <Content
              link={item.link}
              image={item.image}
              description={item.description}
              title={item.title}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={4}>
          <p style={{ marginTop: "30px", marginBottom: "30px" }}>
            - Study Case
          </p>
        </Col>
      </Row>
      <Row>
        {home.slice(4, 8).map((item, id) => (
          <Col key={id} lg={6} md={12} sm={12} xs={12}>
            <Content
              link={item.link}
              image={item.image}
              description={item.description}
              title={item.title}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
