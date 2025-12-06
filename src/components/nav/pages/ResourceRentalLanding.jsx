import { Col, Container, Row } from "react-bootstrap";

export default function ResourceRentalLanding(props) {

  return <div>
    <Container fluid={true}>
      <Row>
        <Col>
          <h1>Welcome to Resource Rentals! </h1>
          < br />
          <p>
            With this system, University of Wisconsin-Madison students will be given the opportunity to reserve and check out various
            resources. These resources may be helpful for organizations to have for different events, but are too expensive to justify a
            long-term purchase; such items include a Wii Console and Wii Games, foldable tables, board games, carts, canopies, and photography
            equipment.
          </p>
          <p>Please read the steps below to become familiar with the Resource Rental process!</p>
          < br />
          <h2>Step 1</h2>
          <p>
            Please ensure that you are signed into this site with your @wisc.edu email and password, as this service is available only to
            UW-Madison students. If you are not yet logged in, please do so using the <strong>Login</strong> button in the menu above. Additionally,
            please note that the items you reserve will be tied to the email and password you use to log in.
          </p>
          <h2>Step 2</h2>
          <p>
            If you know which item(s) you would like to reserve, as well as the date that you would like to reserve the resource, please
            consult with the calendar on the <strong>Availability</strong> page to ensure that the item(s) will be available. You will not be allowed
            to access the item if it is in use on the date you had planned; please refer back to this page if you are unsure whether the item you want will be in use.
          </p>
          <h2>Step 3</h2>
          <p>
            Please navigate to the <strong>Catalog</strong> page, where you can search for the item(s) that you would
            like to rent. On this page, you can search for your item(s) either by catagory or by name; once you find your desired item, please
            click the <em>Add to Cart</em> button. This action will add the item to your cart, where then it can be rented.
          </p>
          <h2>Step 4</h2>
          <p>
            Ensure that your <strong>Cart</strong> contains all of the items you wish to rent; the items in your cart will be the only
            items available for selection when you fill out the Resource Rental Checkout Form
          </p>
          <h2>Step 5</h2>
          <p>
            Complete the Resource Rental <strong>Request Form</strong>, which will notify us at SOLI of the item that you wish to
            rent, your method of payment (which will be made when you pick up the item at our Front Desk, located at 333 East Campus
            mall), and the date of your reservation. Upon submission, we will review your request form. If it is approved, you may
            pick up the item you specified; if it is denied, please make any necessary updates an resubmit the form.
          </p>
          < br />
        </Col>
      </Row>
    </Container>
  </div>
}