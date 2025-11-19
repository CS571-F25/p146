import { Card, Button, Carousel } from "react-bootstrap";
import { useState } from "react";

export default function CatalogCard(props) {

  // display data
  return <Card>
    <Card.Img variant="top" src={props.img} alt={"Image of " + props.name}
      style={{ height: "100%", objectFit: "cover", width: "100%" }} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <div className="d-flex gap-2">
        <Button variant="primary">Select</Button>
        <Button variant="success">Rent</Button>
      </div>
    </Card.Body>
  </Card>
}