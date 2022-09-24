import React from "react";
import { Col, Row } from "react-bootstrap";
import Dribbble from "../card/card";

export default function Project() {
  return (
    <>
      <Row style={{ marginTop: "100px" }}>
        <Col xs={6}>
          <Dribbble image={require("../../image/paint.png")} title="PaintApp" />
        </Col>
        <Col xs={6}>
          <Dribbble
            image={require("../../image/receipt.png")}
            title="Receipt App"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Dribbble
            image={require("../../image/ududless.png")}
            title="Ududless App"
          />
        </Col>
        <Col xs={6}>
          <Dribbble
            image={require("../../image/travel.png")}
            title="Travel App"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Dribbble image={require("../../image/coin.png")} title="Coin App" />
        </Col>
        <Col xs={6}>
          <Dribbble image={require("../../image/nft.png")} title="NFT App" />
        </Col>
      </Row>
    </>
  );
}
