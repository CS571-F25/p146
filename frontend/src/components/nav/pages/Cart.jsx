import resourcesData from '../../../data/resources.json';
import CartCard from "./CartCard";

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Cart() {

  const [resources, setResources] = useState([]);
  // get saved item from local
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    // get saved items from local
    const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    // save to use state
    setSavedItems(saved);
    setResources(resourcesData);
  }, []);

  function applyUnselect() {
    // get saved items from local
    const saved = JSON.parse(localStorage.getItem('savedItems'));
    // set in use state
    setSavedItems(saved);
  }

  const itemsFiltered = resources.filter(i => {
    return (savedItems.some(savedItem => savedItem.id === i.id));
  });

  return <div>
    <h1>Cart</h1>
    <Container>
      {savedItems.length === 0 && (
        <p>You have no items in your cart. Please browse the catalog to see the resources you can rent!</p>
      )}
      {savedItems.length > 0 && (
        <Row>
          {
            itemsFiltered.map(r => <Col xs={12} sm={12} md={6} lg={4} xl={3} key={r.id}>
              <CartCard {...r} apply={applyUnselect} />
            </Col>)
          }
        </Row>
      )}
    </Container>
  </div>
}