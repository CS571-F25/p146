import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

import crest from '../../assets/uw-crest.svg'

export default function ResourceRentalNavbar(props) {
  return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand as={Link} to="/">
        <img
          alt="uw logo"
          src={crest}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Resource Rentals!
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/Availability">Availability</Nav.Link>
          <Nav.Link as={Link} to="/Catalog">Catalog</Nav.Link>
          <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/RequestForm">Checkout Form</Nav.Link>
          <Nav.Link as={Link} to="/Policies">Policies</Nav.Link>
          <Nav.Link as={Link} to="/Logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}
