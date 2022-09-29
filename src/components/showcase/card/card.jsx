import React from "react";
import { Card } from "react-bootstrap";

export default function Dribbble(props) {
  return (
    <Card {...props} style={{ marginBottom: "20px", border: "none" }}>
      <Card.Body className="showcase-card">
        <Card.Link href={props.link} target="_blank">
          <Card.Img
            variant="top"
            src={props.image}
            style={{ marginBottom: "10px" }}
          />
        </Card.Link>
        <Card.Subtitle className="mb-2">{props.title}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
