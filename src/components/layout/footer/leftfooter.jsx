import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedium,
  faInstagram,
  faLinkedin,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

export default function Leftfooter() {
  return (
    <>
      <Row style={{ marginTop: "50px" }}>
        <Col
          xs={12}
          style={{
            display: "grid",
            justifyContent: "start",
            textAlign: "center",
          }}
        >
          <h1>Let’s Connect</h1>
          <p>For Work inquiry or just say hello</p>
          <a
            href="mailto: hawari.hisyam@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>hawari.hisyam@gmail.com</p>
          </a>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          style={{
            display: "flex",
            justifyContent: "start",
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "100px",
          }}
        >
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className="mx-3"
              color="black"
              icon={faInstagram}
            />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="mx-3" color="black" icon={faLinkedin} />
          </a>
          <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="mx-3" color="black" icon={faDribbble} />
          </a>
          <a href="https://medium.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="mx-3" color="black" icon={faMedium} />
          </a>
        </Col>
      </Row>
    </>
  );
}
