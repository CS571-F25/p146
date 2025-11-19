import CatalogCard from "./CatalogCard";
import resourcesData from '../../../data/resources.json';

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Catalog() {

  const [resources, setResources] = useState([]);

  useEffect(() => {
    setResources(resourcesData);
  }, []);

  return <div>
    <h1>Catalog</h1>
    <Container>
      <Row>
        {
          resources.map(r => <Col xs={12} sm={12} md={6} lg={4} xl={3} key={r.id}>
            <CatalogCard {...r} />
          </Col>)
        }
      </Row>
    </Container>
  </div>
}