import { Card, Button, Carousel } from "react-bootstrap";
import { useState } from "react";

export default function CartCard(props) {

  const [quantityInCart, setQuantityInCart] = useState(JSON.parse(localStorage.getItem('quantityInCart')));

  function handleUnselect() {
    // handle cart quantity
    const currentQuantityInCart = JSON.parse(localStorage.getItem('quantityInCart'));
    if (!currentQuantityInCart[props.name]) {
      return;
    }
    currentQuantityInCart[props.name] -= 1;
    localStorage.setItem('quantityInCart', JSON.stringify(currentQuantityInCart));
    setQuantityInCart(currentQuantityInCart);

    if (currentQuantityInCart[props.name] === 0) {
      // handle current list of saved items
      const currentSaved = JSON.parse(localStorage.getItem('savedItems'));
      const newSaved = currentSaved.filter(s => s.id != props.id);
      localStorage.setItem('savedItems', JSON.stringify(newSaved));
    }
    // handle catalog quantity
    const currentQuantity = JSON.parse(localStorage.getItem('quantityAvailable'));
    currentQuantity[props.name] += 1;
    localStorage.setItem('quantityAvailable', JSON.stringify(currentQuantity));
    // handle available
    if (currentQuantity[props.name] > 0) {
      localStorage.setItem(`${props.name}_available`, JSON.stringify(true));
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
      <p>Quantity in Cart: {quantityInCart[props.name]}</p>
      <div className="d-flex gap-2">
        <Button style={{ backgroundColor: "red", borderColor: "red" }} onClick={handleUnselect}>Remove from Cart</Button>
      </div>
    </Card.Body>
  </Card>
}