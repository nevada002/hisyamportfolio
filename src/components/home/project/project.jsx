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
        {home.map((item, id) => (
          <Col key={id} md={6} sm={6} xs={12}>
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
