import CatalogCard from "./CatalogCard";
import resourcesData from '../../../data/resources.json';

import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Catalog() {

  const [resources, setResources] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(-1);
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");

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

  function clearSearch() {
    setItem("");
    setCategory("");
  }

  const filtered = resources.filter(r => {
    const normalizedCategory = category.toLowerCase().trim().replace(/\s/g, '_');
    const resourceType = r.type.toLowerCase().replace(/\s/g, '_');

    return r.name.toLowerCase().includes(item.toLowerCase().trim())
      && (normalizedCategory === "" || resourceType.includes(normalizedCategory));
  });

  return <div>
    <h1>Catalog</h1>
    <p>Here, you can search for items based on their name and category.</p>
    <Form>
      <Form.Label htmlFor="searchItem">If you know the item you are looking for, please type it in here.</Form.Label>
      <Form.Control
        id="searchItem"
        value={item}
        onChange={(e) => { setItem(e.target.value) }}
      />
      <br />
      <Form.Label htmlFor="searchCategory">If you are searching for an item in a specific category, please type it in here.</Form.Label>
      <Form.Control
        id="searchCategory"
        value={category}
        onChange={(e) => { setCategory(e.target.value) }}
      />
      <br />
      <Button variant="neutral" onClick={clearSearch}>Reset Search</Button>
    </Form>
    <Container>
      <Row>
        {
          filtered.map(r => <Col xs={12} sm={12} md={6} lg={4} xl={3} key={r.id}>
            <CatalogCard {...r} apply={applySave} />
          </Col>)
        }
      </Row>
    </Container>
  </div>
}