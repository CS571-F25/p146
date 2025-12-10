import { useRef, useContext, useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import ReservationsContext from "../../../contexts/ReservationsContext";

export default function RequestForm() {

  const [allChecked, setAllChecked] = useState(true);
  const [nameInput, setNameInput] = useState(true);
  const [emailInput, setEmailInput] = useState(true);
  const [phoneInput, setPhoneInput] = useState(true);
  const [use, setUse] = useState("Open this select menu");
  const [item, setItem] = useState("Open this select menu");
  const [quantity, setQuantity] = useState(true);
  const [days, setDays] = useState(true);
  const [date, setDate] = useState(true);
  const [payment, setPayment] = useState(true);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const useTypeRef = useRef();
  const itemRef = useRef();
  const quantityRef = useRef();
  const resTimeRef = useRef();
  const resDayRef = useRef();
  const paymentRef = useRef();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  const [savedItems, setSavedItems] = useState([]);
  const [reservations, setReservations] = useContext(ReservationsContext);
  const navigate = useNavigate();

  useEffect(() => {
    // get saved items upon return from different page
    const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    setSavedItems(saved);

    // load draft 
    const draft = localStorage.getItem('formDraft');
    if (draft) {
      const draftData = JSON.parse(draft);
      if (nameRef.current) nameRef.current.value = draftData.name || '';
      if (emailRef.current) emailRef.current.value = draftData.email || '';
      if (phoneRef.current) phoneRef.current.value = draftData.phone || '';
      if (quantityRef.current) quantityRef.current.value = draftData.quantity || '';
      if (resTimeRef.current) resTimeRef.current.value = draftData.resTime || '';
      if (resDayRef.current) resDayRef.current.value = draftData.resDay || '';
    }
  }, []);

  function saveDraft() {
    const draft = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      useType: useTypeRef.current?.value,
      itemName: itemRef.current?.value,
      quantity: quantityRef.current?.value,
      resTime: resTimeRef.current?.value,
      resDay: resDayRef.current?.value,
      payment: paymentRef.current?.value
    };
    localStorage.setItem('formDraft', JSON.stringify(draft));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // reset all error states first
    setNameInput(true);
    setEmailInput(true);
    setPhoneInput(true);
    setUse(true);
    setItem(true);
    setQuantity(true);
    setDays(true);
    setDate(true);
    setAllChecked(true);
    setPayment(true);

    let hasError = false;
    // make sure all fields are filled out
    const name = nameRef.current.value?.trim();
    if (!name) {
      setNameInput(false);
      hasError = true;
    }
    const email = emailRef.current.value?.trim();
    if (!email) {
      setEmailInput(false);
      hasError = true;
    }
    const phone = phoneRef.current.value?.trim();
    if (!phone) {
      setPhoneInput(false);
      hasError = true;
    }
    const useType = useTypeRef.current.value;
    if (!useType || useType === "Open this select menu" || useType === "") {
      setUse(false);
      hasError = true;
    }
    const itemName = itemRef.current.value;
    if (!itemName || itemName === "Open this select menu" || itemName === "") {
      setItem(false);
      hasError = true;
    }
    const reserveQuantity = parseInt(quantityRef.current.value);
    const quantityInCart = JSON.parse(localStorage.getItem('quantityInCart')) || {};
    if (!reserveQuantity || isNaN(reserveQuantity) || reserveQuantity <= 0 || reserveQuantity !== quantityInCart[itemName]) {
      setQuantity(false);
      hasError = true;
    }
    const daysNum = parseInt(resTimeRef.current.value);
    if (!daysNum || isNaN(daysNum) || daysNum <= 0) {
      setDays(false);
      hasError = true;
    }
    const startDate = new Date(resDayRef.current.value + 'T00:00:00');
    if (!resDayRef.current.value || isNaN(startDate.getTime())) {
      setDate(false);
      hasError = true;
    }
    const payment = paymentRef.current.value;
    if (!payment || payment === "Open this select menu" || payment === "") {
      setPayment(false);
      hasError = true;
    }
    if (!check1 || !check2 || !check3 || !check4 || !check5) {
      setAllChecked(false);
      hasError = true;
    }
    if (hasError) {
      return;
    }

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + daysNum);

    // new reservation object
    const newReservation = {
      id: Date.now(),
      title: `${itemName} (${reserveQuantity}x)`,
      start: startDate,
      end: endDate,
      itemName,
      quantity: reserveQuantity,
      name: nameRef.current.value,
      email: emailRef.current.value
    };

    // update reservations with new reservation
    setReservations(prev => [...prev, newReservation]);

    // make sure save list is updated
    const newSaved = savedItems.filter(i => i.name != itemName);
    localStorage.setItem('savedItems', JSON.stringify(newSaved));

    // make sure cart quantity is updated
    const currentQuantityInCart = JSON.parse(localStorage.getItem('quantityInCart')) || {};
    delete currentQuantityInCart[itemName];
    localStorage.setItem('quantityInCart', JSON.stringify(currentQuantityInCart));

    // clear draft after successful submission
    localStorage.removeItem('formDraft');

    alert("Reservation successfully created");
    navigate('/Availability');
  }

  return <div>
    <h1>Resource Rental Checkout Form</h1>
    <br />

    <h2>Reservation Information</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Label htmlFor="name" style={{ marginTop: 20 }}>Name (First and Last)</Form.Label>
      <Form.Control id="name" ref={nameRef} onChange={saveDraft}></Form.Control>
      {!nameInput && (
        <p style={{ color: "red" }}>&#9888; You must provide your name prior to submitting this form.</p>
      )}

      <Form.Label htmlFor="email" style={{ marginTop: 20 }}>Email (@wisc.edu)</Form.Label>
      <Form.Control id="email" ref={emailRef} onChange={saveDraft}></Form.Control>
      {!emailInput && (
        <p style={{ color: "red" }}>&#9888; You must provide your email prior to submitting this form.</p>
      )}

      <Form.Label htmlFor="phone" style={{ marginTop: 20 }}>Phone Number</Form.Label>
      <Form.Control id="phone" ref={phoneRef} onChange={saveDraft}></Form.Control>
      {!phoneInput && (
        <p style={{ color: "red" }}>&#9888; You must provide a valid phone number prior to submitting this form.</p>
      )}

      <Form.Label htmlFor="useType" style={{ marginTop: 20 }}>Is this resource for organizational or personal use?</Form.Label>
      <select ref={useTypeRef} className="form-select" aria-label="Organizational or personal use" onChange={saveDraft}>
        <option value="">Open this select menu</option>
        <option value="organizational">Organizational Use</option>
        <option value="personal">Personal Use</option>
      </select>
      {!use && (
        <p style={{ color: "red" }}>&#9888; Please select how you are going to use this item.</p>
      )}

      <Form.Label htmlFor="item" style={{ marginTop: 20 }}>Which item from your cart would you like to reserve?</Form.Label>
      <select ref={itemRef} className="form-select" aria-label="Item to reserve" onChange={saveDraft}>
        <option value="">Open this select menu</option>
        {
          savedItems.map(i => <option key={i.id} value={i.name}>{i.name}</option>)
        }
      </select>
      {!item && (
        <p style={{ color: "red" }}>&#9888; Please select which resource you would like to reserve.</p>
      )}

      <Form.Label htmlFor="quantity" style={{ marginTop: 20 }}>How many of this item do you want to reserve?</Form.Label>
      <Form.Control id="quantity" ref={quantityRef} onChange={saveDraft}></Form.Control>
      {!quantity && (
        <p style={{ color: "red" }}>&#9888; You must report the quantity of this item as contained in your cart.</p>
      )}

      <Form.Label htmlFor="resTime" style={{ marginTop: 20 }}>How many days are you reserving this item?</Form.Label>
      <Form.Control id="resTime" ref={resTimeRef} onChange={saveDraft}></Form.Control>
      {!days && (
        <p style={{ color: "red" }}>&#9888; You must report how many days you will be reserving this item.</p>
      )}

      <Form.Label htmlFor="resDay" style={{ marginTop: 20 }}>What day is the start of your reservation?</Form.Label>
      <Form.Control id="resDay" type="date" ref={resDayRef} onChange={saveDraft}></Form.Control>
      {!date && (
        <p style={{ color: "red" }}>&#9888; You must report when your reservation will start.</p>
      )}
      <br />

      <h2>Payment Information</h2>
      <Form.Label htmlFor="payment" style={{ marginTop: 20 }}>How will you be paying for this reservable item?</Form.Label>
      <select ref={paymentRef} className="form-select" aria-label="Payment of item" onChange={saveDraft}>
        <option value="">Open this select menu</option>
        <option value="WisCard">WisCard</option>
        <option value="CreditCard">Credit Card</option>
        <option value="DebitCard">Debit Card</option>
      </select>
      {!payment && (
        <p style={{ color: "red" }}>&#9888; Please select how you will be paying for this item.</p>
      )}
      <br />

      <h2>Rental Agreement</h2>
      <p>Check the following boxes to affirm your understanding of this agreement.</p>
      <div className="form-check">
        <Form.Control className="form-check-input" type="checkbox" id="check1" checked={check1} onChange={(e) => setCheck1(e.target.checked)}></Form.Control>
        <Form.Label className="form-check-label" htmlFor="check1">I agree to return the item at least an hour before close (9PM Sun-Thurs or 7PM Fri-Sat) on the due date at the SAC front desk (the location I received the item).</Form.Label>
      </div>
      <div className="form-check">
        <Form.Control className="form-check-input" type="checkbox" id="check2" checked={check2} onChange={(e) => setCheck2(e.target.checked)}></Form.Control>
        <Form.Label className="form-check-label" htmlFor="check2">Misuse of reservable items may result in escalation to the Office of Student Conduct and Community Standards (OSCCS) and/or limit future ability to reserve items.</Form.Label>
      </div>
      <div className="form-check">
        <Form.Control className="form-check-input" type="checkbox" id="check3" checked={check3} onChange={(e) => setCheck3(e.target.checked)}></Form.Control>
        <Form.Label className="form-check-label" htmlFor="check3">If not returned for 10 business days, the unit will be considered lost and I will pay the replacement cost.</Form.Label>
      </div>
      <div className="form-check">
        <Form.Control className="form-check-input" type="checkbox" id="check4" checked={check4} onChange={(e) => setCheck4(e.target.checked)}></Form.Control>
        <Form.Label className="form-check-label" htmlFor="check4">I understand that if the unit is damaged, a fine may be assessed up to the replacement cost.</Form.Label>
      </div>
      <div className="form-check">
        <Form.Control className="form-check-input" type="checkbox" id="check5" checked={check5} onChange={(e) => setCheck5(e.target.checked)}></Form.Control>
        <Form.Label className="form-check-label" htmlFor="check5">I understand that if my request is not submitted at least 5 days in advance of the event, I may not be able to reserve the item.</Form.Label>
      </div>
      {!allChecked && (
        <p style={{ color: "red" }}>&#9888; You must agree to all terms in the rental agreement prior to submitting this form.</p>
      )}
      <br />

      <Button style={{ backgroundColor: "red", border: "none" }} type="submit">Submit</Button>
    </Form>
  </div>
}