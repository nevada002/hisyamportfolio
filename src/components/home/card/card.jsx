import React from "react";
import { Card } from "react-bootstrap";

export default function Content(props) {
  return (
    <Card {...props} style={{ marginBottom: "20px", border: "none" }}>
      <Card.Body>
        <Card.Link href={props.link} target="_blank">
          <Card.Img
            variant="top"
            src={props.image}
            style={{ marginBottom: "10px", height: "350.78px" }}
          />
        </Card.Link>
        <Card.Subtitle className="mb-2 text-muted">{props.title}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
