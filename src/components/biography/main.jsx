import React from "react";
import { Col, Row } from "react-bootstrap";
import Leftfooter from "../layout/footer/leftfooter";
import Hisyam from "./image/hisyam";

export default function Main() {
  return (
    <div>
      <Row style={{ marginTop: "100px" }}>
        <Col lg={8}>
          <Col xs={12}>
            <h1>- About Me</h1>
          </Col>
          <Col xs={12} style={{ marginTop: "50px" }}>
            <p>
              Helo, I'm Hisyam Hawari, <br /> a designer passion in digital
              product design, UX Design, and UX Research. <br /> I am a graduate
              of S1 Information Systems Telkom University <br /> I am currently
              a Project Based UX designer at a company in Indonesia.
            </p>
          </Col>
          <Col xs={12} style={{ marginTop: "50px" }}>
            <p>
              I believe that design can help most users technology, help create
              an easy and <br /> enjoyable experience between people and
              products, solve complex problems critically <br /> and
              realistically, and turn conceptual ideas into reality. I enjoy the
              process and sense of <br /> accomplishment the contribution to the
              humanitarian journey it. It makes me feel alive.
            </p>
          </Col>
          <Col xs={12} style={{ marginTop: "50px" }}>
            <p style={{ marginBottom: "0px" }}>UI Designer Internship</p>
            <p>- Tamtech International</p>
            <p style={{ marginBottom: "0px" }}>UX Design and UX Researcher</p>
            <p>- Matriks Studio</p>
            <p style={{ marginBottom: "0px" }}>UX Design and UI Internship</p>
            <p>- Telkom Indonesia</p>
            <p style={{ marginBottom: "0px" }}>
              UX Design and UI Design Internship
            </p>
            <p>- Tomps Indonesia</p>
          </Col>
          <Col xs={12} style={{ marginTop: "100px" }}>
            <Leftfooter />
          </Col>
        </Col>
        <Col lg={4}>
          <Hisyam />
        </Col>
      </Row>
    </div>
  );
}
