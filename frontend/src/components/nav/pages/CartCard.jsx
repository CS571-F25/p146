import { Card, Button, Carousel } from "react-bootstrap";
import { useState } from "react";

export default function CartCard(props) {

  function handleUnselect() {
    // handle current list of saved cats
    const currentSaved = JSON.parse(sessionStorage.getItem('savedItems'));
    const newSaved = currentSaved.filter(s => s.id != props.id);
    sessionStorage.setItem('savedItems', JSON.stringify(newSaved));
    // handle quantity
    const currentQuantity = JSON.parse(sessionStorage.getItem('quantityAvailable'));
    currentQuantity[props.name] += 1;
    sessionStorage.setItem('quantityAvailable', JSON.stringify(currentQuantity));
    // handle available
    if (currentQuantity[props.name] > 0) {
      sessionStorage.setItem(`${props.name}_available`, JSON.stringify(true));
    }
    // trigger render
    props.apply();
    // alert user
    alert(props.name + " has been removed from your cart!");
  }

  // display data
  return <Card>
    <Card.Img variant="top" src={props.img} alt={"Image of " + props.name}
      style={{ height: "100%", objectFit: "cover", width: "100%" }} />
    <Card.Body>
      <div>
        <Card.Title>{props.name}</Card.Title>
      </div>
      <p>Price Per Day: ${props.pricePerDay.toFixed(2)}</p>
      <div className="d-flex gap-2">
        <Button style={{ backgroundColor: "red", borderColor: "red" }} onClick={handleUnselect}>Remove from Cart</Button>
      </div>
    </Card.Body>
  </Card>
}