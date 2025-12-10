import { Card, Button, Carousel } from "react-bootstrap";
import { useState } from "react";

export default function CatalogCard(props) {

  // const [isItemSaved, setIsItemSaved] = useState(false);
  const [isAvailable, setIsAvailable] = useState(() => {
    const stored = localStorage.getItem(`${props.name}_available`);
    if (stored !== null) {
      return JSON.parse(stored);
    }
    return true;
  });
  const [quantity, setQuantity] = useState(() => {
    const quantityAvailable = JSON.parse(localStorage.getItem('quantityAvailable')) || {};
    return quantityAvailable[props.name] ?? props.quantity;
  });
  const [quantityInCart, setQuantityInCart] = useState(() => {
    const quantityInCart = JSON.parse(localStorage.getItem('quantityInCart')) || {};
    return quantityInCart[props.name] ?? 0;
  });

  function handleSaveToCart() {
    // check to see if items are saved to local. if not, start list
    const currentSaved = JSON.parse(localStorage.getItem('savedItems')) || [];
    const itemExists = currentSaved.some(item => item.id === props.id);
    if (!itemExists) {
      const newSaved = [...currentSaved, props];
      localStorage.setItem('savedItems', JSON.stringify(newSaved));
    }
    // handle quantity in catalog
    const currentQuantity = JSON.parse(localStorage.getItem('quantityAvailable')) || {};
    if (currentQuantity[props.name] === undefined) {
      currentQuantity[props.name] = props.quantity;
    }
    currentQuantity[props.name] -= 1;
    localStorage.setItem('quantityAvailable', JSON.stringify(currentQuantity));
    setQuantity(currentQuantity[props.name]);
    // handle quantity in cart
    const currentQuantityInCart = JSON.parse(localStorage.getItem('quantityInCart')) || {};
    if (currentQuantityInCart[props.name] === undefined) {
      currentQuantityInCart[props.name] = 0;
    }
    currentQuantityInCart[props.name] += 1;
    localStorage.setItem('quantityInCart', JSON.stringify(currentQuantityInCart));
    setQuantityInCart(currentQuantityInCart[props.name]);
    // handle available
    if (currentQuantity[props.name] === 0) {
      setIsAvailable(false);
      localStorage.setItem(`${props.name}_available`, JSON.stringify(false));
    }
    // trigger render
    props.apply();
    // alert the user that the item has been added to the cart
    alert(props.name + " has been added to your cart!");
  }

  // display data
  return <Card>
    <Card.Img variant="top" src={props.img} alt={"Image of " + props.name}
      style={{ height: "100%", objectFit: "cover", width: "100%" }} />
    <Card.Body>
      <div>
        <Card.Title>{props.name}</Card.Title>
      </div>
      {isAvailable && (
        <div>
          <Card.Title style={{ color: "green" }}>Item Available</Card.Title>
        </div>
      )}
      {!isAvailable && (
        <div>
          <Card.Title style={{ color: "red" }}>Item Unavailable</Card.Title>
        </div>
      )}
      <p>Price Per Day: ${props.pricePerDay.toFixed(2)}</p>
      <p>Quantity available for rent: {quantity}</p>
      <div className="d-flex gap-2">
        <Button style={{ backgroundColor: "red", borderColor: "red" }} onClick={handleSaveToCart}>Add to Cart</Button>
      </div>
    </Card.Body>
  </Card>
}