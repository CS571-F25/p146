import { Card, Button, Carousel } from "react-bootstrap";
import { useState } from "react";

export default function CatalogCard(props) {

  // const [isItemSaved, setIsItemSaved] = useState(false);
  const [isAvailable, setIsAvailable] = useState(() => {
    const stored = sessionStorage.getItem(`${props.name}_available`);
    if (stored !== null) {
      return JSON.parse(stored);
    }
    return true;
  });
  const [quantity, setQuantity] = useState(() => {
    const quantityAvailable = JSON.parse(sessionStorage.getItem('quantityAvailable')) || {};
    return quantityAvailable[props.name] ?? props.quantity;
  });
  const [quantityInCart, setQuantityInCart] = useState(() => {
    const quantityInCart = JSON.parse(sessionStorage.getItem('quantityInCart')) || {};
    return quantityInCart[props.name] ?? 0;
  });

  function handleSaveToCart() {
    // check to see if items are saved to session. if not, start list
    const currentSaved = JSON.parse(sessionStorage.getItem('savedItems')) || [];
    const itemExists = currentSaved.some(item => item.id === props.id);
    if (!itemExists) {
      const newSaved = [...currentSaved, props];
      sessionStorage.setItem('savedItems', JSON.stringify(newSaved));
    }
    // handle quantity in catalog
    const currentQuantity = JSON.parse(sessionStorage.getItem('quantityAvailable')) || {};
    if (currentQuantity[props.name] === undefined) {
      currentQuantity[props.name] = props.quantity;
    }
    currentQuantity[props.name] -= 1;
    sessionStorage.setItem('quantityAvailable', JSON.stringify(currentQuantity));
    setQuantity(currentQuantity[props.name]);
    // handle quantity in cart
    const currentQuantityInCart = JSON.parse(sessionStorage.getItem('quantityInCart')) || {};
    if (currentQuantityInCart[props.name] === undefined) {
      currentQuantityInCart[props.name] = 0;
    }
    currentQuantityInCart[props.name] += 1;
    sessionStorage.setItem('quantityInCart', JSON.stringify(currentQuantityInCart));
    setQuantityInCart(currentQuantityInCart[props.name]);
    // handle available
    if (currentQuantity[props.name] === 0) {
      setIsAvailable(false);
      sessionStorage.setItem(`${props.name}_available`, JSON.stringify(false));
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