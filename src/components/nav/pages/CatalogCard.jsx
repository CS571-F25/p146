import { Card, Button, Carousel } from "react-bootstrap";
import { useState } from "react";

export default function CatalogCard(props) {

  // display data
  return <Card>
    <Card.Img variant="top" src={props.img} alt={"Image of " + props.name}
      style={{ height: "100%", objectFit: "cover", width: "100%" }} />
    <Card.Body>
      <div className="d-flex gap-4">
        <Card.Title>{props.name}</Card.Title>
        <Card.Title style={{ color: "green" }}>Available</Card.Title>
      </div>
      <p>Price Per Day: ${props.pricePerDay.toFixed(2)}</p>
      <p>Quantity available for rent: {props.quantity}</p>
      <div className="d-flex gap-2">
        <Button style={{ backgroundColor: "red", borderColor: "red" }}>Add to Cart</Button>
      </div>
    </Card.Body>
  </Card>
}