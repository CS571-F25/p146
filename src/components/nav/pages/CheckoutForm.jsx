import { useRef, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function CheckoutForm() {

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const useTypeRef = useRef();
  const itemRef = useRef();
  const quantityRef = useRef();
  const resTimeRef = useRef();
  const resDayRef = useRef();
  const paymentRef = useRef();

  return <div>
    <h1>Checkout Form</h1>
    < br />

    <h2>Reservation Information</h2>
    <Form>
      <Form.Label htmlFor="name" style={{ marginTop: 20 }}>Name (First and Last)</Form.Label>
      <Form.Control id="name" ref={nameRef}></Form.Control>

      <Form.Label htmlFor="email" style={{ marginTop: 20 }}>Email (@wisc.edu)</Form.Label>
      <Form.Control id="email" ref={emailRef}></Form.Control>

      <Form.Label htmlFor="phone" style={{ marginTop: 20 }}>Phone Number</Form.Label>
      <Form.Control id="phone" ref={phoneRef}></Form.Control>

      <Form.Label ref={useTypeRef} htmlFor="useType" style={{ marginTop: 20 }}>Is this resource for organizational or personal use?</Form.Label>
      <select className="form-select" aria-label="Organizational or personal use">
        <option defaultValue="open">Open this select menu</option>
        <option value="organizational">Organizational Use</option>
        <option value="personal">Personal Use</option>
      </select>

      <Form.Label ref={itemRef} htmlFor="useType" style={{ marginTop: 20 }}>Which item would you like to reserve?</Form.Label>
      <select className="form-select" aria-label="Item to reserve">
        <option defaultValue="open">Open this select menu</option>
        <option value="s">Sorry!</option>
        <option value="c">Connect 4</option>
      </select>

      <Form.Label htmlFor="quantity" style={{ marginTop: 20 }}>How many of this item do you want to reserve?</Form.Label>
      <Form.Control id="quantity" ref={quantityRef}></Form.Control>

      <Form.Label htmlFor="resTime" style={{ marginTop: 20 }}>How many days are you reserving this item?</Form.Label>
      <Form.Control id="resTime" ref={resTimeRef}></Form.Control>

      <Form.Label htmlFor="resDay" style={{ marginTop: 20 }}>What day is the start of your reservation?</Form.Label>
      <Form.Control id="resDay" ref={resDayRef}></Form.Control>
      <br />

      <h2>Payment Information</h2>
      <Form.Label ref={paymentRef} htmlFor="useType" style={{ marginTop: 20 }}>How will you be paying for this reservable item?</Form.Label>
      <select className="form-select" aria-label="Payment of item">
        <option defaultValue="open">Open this select menu</option>
        <option value="WisCard">WisCard</option>
        <option value="CreditCard">Credit Card</option>
        <option value="DebitCard">Debit Card</option>
      </select>
      <br />

      <h2>Rental Agreement</h2>
      <p>Check the following boxes to affirm your understanding of this agreement.</p>
      <div className="form-check">
        <Form.Control className="form-check-input" type="checkbox" id="check1" name="option1" value="something"></Form.Control>
        <Form.Label className="form-check-label" htmlFor="check1">I agree to return the item at least an hour before close (9PM Sun-Thurs or 7PM Fri-Sat) on the due date at the SAC front desk (the location I received the item).</Form.Label>
      </div>
      <div className="form-check">
        <Form.Control className="form-check-input" type="checkbox" id="check2" name="option2" value="something"></Form.Control>
        <Form.Label className="form-check-label" htmlFor="check2">Misuse of reservable items may result in escalation to the Office of Student Conduct and Community Standards (OSCCS) and/or limit future ability to reserve items.</Form.Label>
      </div>
      <div className="form-check">
        <Form.Control className="form-check-input" type="checkbox" id="check3" name="option3" value="something"></Form.Control>
        <Form.Label className="form-check-label" htmlFor="check3">If not returned for 10 business days, the unit will be considered lost and I will pay the replacement cost.</Form.Label>
      </div>
      <div className="form-check">
        <Form.Control className="form-check-input" type="checkbox" id="check4" name="option4" value="something"></Form.Control>
        <Form.Label className="form-check-label" htmlFor="check4">I understand that if the unit is damaged, a fine may be assessed up to the replacement cost.</Form.Label>
      </div>
      <div className="form-check">
        <Form.Control className="form-check-input" type="checkbox" id="check5" name="option5" value="something"></Form.Control>
        <Form.Label className="form-check-label" htmlFor="check5">I understand that if my request is not submitted at least 5 days in advance of the event, I may not be able to reserve the item.</Form.Label>
      </div>
      <br />

      <Button type="submit">Submit</Button>
    </Form>
  </div>
}