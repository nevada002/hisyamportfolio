import React from "react";
import { Col, Row } from "react-bootstrap";
import Content from "../card/card";

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
        <Col xs={6}>
          <Content
            image={require("../../image/onlyurl.png")}
            title="OnlyUrl"
            description="This project is to redesign shorten link website OnlyURL for better User Experience and better Interface"
          />
        </Col>
        <Col xs={6}>
          <Content
            image={require("../../image/onlycalculator.png")}
            title="OnlyCalculator"
            description="This project is to redesign shorten link website BMI Calculator for better User Experience and Interface"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Content
            image={require("../../image/carmine.png")}
            title="Carmine"
            description="This project is to redesign Club House Chat App for better User Experience and better Interface"
          />
        </Col>
        <Col xs={6}>
          <Content
            image={require("../../image/zyon.png")}
            title="Zyon Indonesia"
            description="This project is to Mental Health Check Up App for Startup Zyon Indonesia"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Content
            image={require("../../image/carmine.png")}
            title="HaiUBelajar"
            description="StudyCase"
          />
        </Col>
        <Col xs={6}>
          <Content
            image={require("../../image/zyon.png")}
            title="Waste4Change x Skilvul"
            description="Study Case"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Content
            image={require("../../image/zyon.png")}
            title="HaiUBund"
            description="Study Case"
          />
        </Col>
        <Col xs={6}>
          <Content
            image={require("../../image/zyon.png")}
            title="Redesign OnlyURL"
            description="Study Case"
          />
        </Col>
      </Row>
    </>
  );
}
