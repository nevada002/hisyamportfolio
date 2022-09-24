import React from "react";
import { Card } from "react-bootstrap";

export default function Content(props) {
  return (
    <Card {...props} style={{ marginBottom: "20px", border: "none" }}>
      <Card.Body>
        <Card.Img
          variant="top"
          src={props.image}
          style={{ marginBottom: "10px" }}
        />
        <Card.Subtitle className="mb-2 text-muted">{props.title}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
