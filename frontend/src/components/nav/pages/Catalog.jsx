import CatalogCard from "./CatalogCard";
import resourcesData from '../../../data/resources.json';

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Catalog() {

  const [resources, setResources] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(-1);

  // get session storage info on mount
  useEffect(() => {
    // get saved items upon return from different page
    const saved = JSON.parse(sessionStorage.getItem('savedItems')) || [];
    setSavedItems(saved);
    setResources(resourcesData);
  }, []);

  function applySave() {
    // get saved items
    const saved = JSON.parse(sessionStorage.getItem('savedItems'));
    // set in use state, triggers render
    setSavedItems(saved);
  }

  return <div>
    <h1>Catalog</h1>
    <Container>
      <Row>
        {
          resources.map(r => <Col xs={12} sm={12} md={6} lg={4} xl={3} key={r.id}>
            <CatalogCard {...r} apply={applySave} />
          </Col>)
        }
      </Row>
    </Container>
  </div>
}